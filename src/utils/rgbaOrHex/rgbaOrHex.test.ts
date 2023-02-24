import { hexToRgba, rgbaToHex } from './index';

test('16进制转rgba', () => {
  expect(hexToRgba('#66ccff')).toBe('rgba(102,204,255,1)');
});

test('rgba转16进制', () => {
  expect(rgbaToHex('rgba(102,204,255,1)')).toBe('#66ccff');
});
