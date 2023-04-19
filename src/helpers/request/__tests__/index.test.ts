import request from '../request';

describe('请求接口', () => {
  test('成功', async () => {
    await request.get('https://www.baidu.com/').then((res) => {
      expect(res.status).toBe(200);
    });
  });

  test('失败', async () => {
    await request.get('https://miao.baidu.com/abdr').catch((err) => {
      expect(err.status).toBe(400);
    });
  });
});
