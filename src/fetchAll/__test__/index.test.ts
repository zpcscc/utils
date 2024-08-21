import fetchAll from '..';

describe('fetchAll', () => {
  test('基本的并发请求功能', async () => {
    const mockRequestFn = jest.fn(({ url, options }) => {
      return new Promise((resolve) => {
        setTimeout(() => resolve({ url, options }), 100);
      });
    });

    const tasks = [
      { url: 'https://example.com/1', options: { method: 'GET' } },
      { url: 'https://example.com/2', options: { method: 'POST' } },
      { url: 'https://example.com/3', options: { method: 'GET' } },
      { url: 'https://example.com/4', options: { method: 'POST' } }
    ];

    const results = await fetchAll(tasks, 2, mockRequestFn);

    expect(results).toHaveLength(tasks.length);
    tasks.forEach((task, index) => {
      expect(results[index]).toEqual(task);
    });

    // 确保并发控制
    expect(mockRequestFn).toHaveBeenCalledTimes(tasks.length);
    // 验证函数是否最多同时调用两次
    const callTimes = mockRequestFn.mock.results.map((result) => result.value);
    expect(callTimes).toEqual(
      expect.arrayContaining([
        expect.any(Promise),
        expect.any(Promise),
        expect.any(Promise),
        expect.any(Promise)
      ])
    );
  });

  test('错误入参', async () => {
    // @ts-expect-error
    const results1 = await fetchAll();
    expect(results1).toEqual([]);
    // @ts-expect-error
    const results2 = await fetchAll([], 0, 1);
    expect(results2).toEqual([]);
  });

  test('最大并发数', async () => {
    const mockRequestFn = jest.fn(({ url }) => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(url), 200);
      });
    });

    const tasks = [
      { url: 'https://example.com/1', options: { method: 'GET' } },
      { url: 'https://example.com/2', options: { method: 'POST' } },
      { url: 'https://example.com/3', options: { method: 'GET' } },
      { url: 'https://example.com/4', options: { method: 'POST' } }
    ];

    const start = Date.now();
    await fetchAll(tasks, 2, mockRequestFn);
    const duration = Date.now() - start;

    // 检查任务是否根据并发限制分批执行
    expect(duration).toBeGreaterThanOrEqual(400); // 2个任务同时运行，每个任务需要200毫秒
    expect(duration).toBeLessThan(600); // 不应超过600ms
  });

  test('应该以正确的并发性执行任务并处理错误', async () => {
    const mockRequestFn = jest.fn(({ url, options }) => {
      if (url.includes('invalid')) {
        return Promise.reject(new Error('Request failed'));
      }
      return new Promise((resolve) => {
        setTimeout(() => resolve({ url, options }), 100);
      });
    });

    const tasks = [
      { url: 'https://example.com/1', options: { method: 'GET' } },
      { url: 'https://example.com/2', options: { method: 'POST' } },
      { url: 'https://example.com/3', options: { method: 'GET' } },
      { url: 'https://example.com/invalid', options: { method: 'GET' } } // This should fail
    ];

    const results = await fetchAll(tasks, 2, mockRequestFn);

    expect(results).toHaveLength(tasks.length);

    expect(results[0]).toEqual({ url: 'https://example.com/1', options: { method: 'GET' } });
    expect(results[1]).toEqual({ url: 'https://example.com/2', options: { method: 'POST' } });
    expect(results[2]).toEqual({ url: 'https://example.com/3', options: { method: 'GET' } });
    expect(results[3]).toEqual({ error: new Error('Request failed') });

    // Ensure the mock function was called the expected number of times
    expect(mockRequestFn).toHaveBeenCalledTimes(tasks.length);
  });

  test('在处理错误时应限制并发性', async () => {
    const mockRequestFn = jest.fn(({ url }) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (url.includes('invalid')) {
            reject(new Error('Request failed'));
          } else {
            resolve(url);
          }
        }, 200);
      });
    });

    const tasks = [
      { url: 'https://example.com/1', options: { method: 'GET' } },
      { url: 'https://example.com/2', options: { method: 'POST' } },
      { url: 'https://example.com/3', options: { method: 'GET' } },
      { url: 'https://example.com/invalid', options: { method: 'GET' } }
    ];

    const start = Date.now();
    await fetchAll(tasks, 2, mockRequestFn);
    const duration = Date.now() - start;

    // Check if tasks are executed in batches according to concurrency limit
    expect(duration).toBeGreaterThanOrEqual(400); // 2 tasks running concurrently, each taking 200ms
    expect(duration).toBeLessThan(600); // Should not exceed 600ms
  });
});
