import request from '../index';

test('request:success', () => {
  return request.get('https://www.baidu.com/').then((res) => {
    expect(res.status).toBe(200);
  });
});

test('request:error', () => {
  return request.get('https://miao.baidu.com/abdr').catch((err) => {
    expect(err.status).toBe(400);
  });
});
