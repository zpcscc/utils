import request from '../request';
import { codeMessage } from '../utils';

describe('请求接口', () => {
  test('成功', async () => {
    await request.get('https://www.baidu.com/').then((res) => {
      expect(res.status).toBe(200);
    });
  }, 5000);

  test('失败', async () => {
    await request.get('https://miao.baidu.com/abdr').catch((error) => {
      expect(error.status).toBe(400);
      expect(error.codeMessage).toBe(codeMessage[400]);
    });
  }, 5000);
});
