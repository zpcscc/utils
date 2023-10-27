import parseColor from 'src/parseColor';

/**
 * @name 将“rgb”、“hex”的颜色格式，转为“hsl”的格式
 * @param {string} string “rgb”、“hex”格式的字符串
 * @returns {string} hsl颜色字符串
 */
const toColorHsl = (string: string): string => {
  const colorObj = parseColor(string);
  const r = colorObj.r / 255;
  const g = colorObj.g / 255;
  const b = colorObj.b / 255;
  const a = Math.floor(colorObj.a * 10000) / 10000;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  let l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: {
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      }
      case g: {
        h = (b - r) / d + 2;
        break;
      }
      case b: {
        h = (r - g) / d + 4;
        break;
      }
    }
    h /= 6;
  }
  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);
  return `hsl(${h},${s}%,${l}%${a === 1 ? '' : `,${a}`})`;
};

export default toColorHsl;
