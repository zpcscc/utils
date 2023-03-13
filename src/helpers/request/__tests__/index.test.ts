import request from '../request';

test('request:success', async () => {
  await request.get('https://www.baidu.com/').then((res) => {
    expect(res.status).toBe(200);
  });
});

test('request:error', async () => {
  await request.get('https://miao.baidu.com/abdr').catch((err) => {
    expect(err.status).toBe(400);
  });
});
