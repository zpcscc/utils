import walkSplit from '../walkSplit';

describe('逐步拆分生成器', () => {
  test('拆分版本号', async () => {
    const iterator = walkSplit('1.2.3-alpha.5', ['.', '-']);
    expect(iterator.next()).toStrictEqual({ done: false, value: '1' });
    expect(iterator.next()).toStrictEqual({ done: false, value: '2' });
    expect(iterator.next()).toStrictEqual({ done: false, value: '3' });
    expect(iterator.next()).toStrictEqual({ done: false, value: 'alpha' });
    expect(iterator.next()).toStrictEqual({ done: false, value: '5' });
    expect(iterator.next()).toStrictEqual({ done: true, value: undefined });
  });
});
