import parseColor from '..';

export const hex1 = '#6666cc';
export const hex1_1 = '#66c';
export const rgb1 = 'rgb(102,102,204)';
export const hsl1 = 'hsl(240,50%,60%)';
export const colorObj1 = { r: 102, g: 102, b: 204, a: 1 };

export const hex2 = '#6666cccc';
export const hex2_1 = '#66cc';
export const rgb2 = 'rgb(102,102,204,0.8)';
export const hsl2 = 'hsl(240,50%,60%,80)';
export const hsl2_1 = 'hsl(240,50%,60%,0.8)';
export const colorObj2 = { r: 102, g: 102, b: 204, a: 0.8 };

export const hex3 = '#66ccff';
export const rgb3 = 'rgb(102,204,255)';
export const rgb3_1 = 'rgb(102,204,255,1)';
export const hsl3 = 'hsl(200,100%,70%)';
export const colorObj3 = { r: 102, g: 204, b: 255, a: 1 };

export const hex4 = '#66ccff99';
export const rgb4 = 'rgb(102,204,255,0.6)';
export const rgb4_1 = 'rgb(102,204,255,60)';
export const hsl4 = 'hsl(200,100%,70%,0.6)';
export const colorObj4 = { r: 102, g: 204, b: 255, a: 0.6 };

export const hex5 = '#ff66cc';
export const rgb5 = 'rgb(255,102,204)';
export const hsl5 = 'hsl(320,100%,70%)';
export const colorObj5 = { r: 255, g: 102, b: 204, a: 1 };

export const hex6 = '#b3b3b3';
export const rgb6 = 'rgb(179,179,179)';
export const hsl6 = 'hsl(0,0%,70%)';
export const colorObj6 = { r: 179, g: 179, b: 179, a: 1 };

export const hex7 = '#66ffcc';
export const rgb7 = 'rgb(102,255,204)';
export const hsl7 = 'hsl(160,100%,70%)';
export const colorObj7 = { r: 102, g: 255, b: 204, a: 1 };

export const hex8 = '#226722';
export const rgb8 = 'rgb(34,103,34)';
export const hsl8 = 'hsl(120,50%,27%)';
export const colorObj8 = { r: 34, g: 103, b: 34, a: 1 };

export const hex9 = '#ffcc66';
export const rgb9 = 'rgb(255,204,102)';
export const hsl9 = 'hsl(40,100%,70%)';
export const colorObj9 = { r: 255, g: 204, b: 102, a: 1 };

export const hex10 = '#0acaff';
export const rgb10 = 'rgb(10,202,255)';
export const rgb10_1 = 'rgb(10,202,255,1)';
export const hsl10 = 'hsl(193,100%,52%)';
export const colorObj10 = { r: 10, g: 202, b: 255, a: 1 };

// 透明色
export const colorObj = { a: 0, b: 0, g: 0, r: 0 };

describe('parseColor', () => {
  test('parseRgb', () => {
    expect(parseColor(rgb1)).toStrictEqual(colorObj1);
  });
  test('parseHex', () => {
    expect(parseColor(hex1)).toStrictEqual(colorObj1);
  });
  test('parseHsl', () => {
    expect(parseColor(hsl1)).toStrictEqual(colorObj1);
  });
  test('特殊值', () => {
    expect(parseColor('transparent')).toStrictEqual(colorObj);
  });
  test('报错提示', () => {
    expect(parseColor('')).toStrictEqual(colorObj);
    expect(parseColor('#66')).toStrictEqual(colorObj);
    expect(parseColor('hsl(')).toStrictEqual(colorObj);
    expect(parseColor('rgb')).toStrictEqual(colorObj);
  });
});
