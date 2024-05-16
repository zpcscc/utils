// * 一些通用any类型定义

// 任意函数类型
export type AnyFunction = (...args: any[]) => any;

// 任意对象类型
export type AnyObject = Record<string, any>;

// 颜色类型
export type ColorObjType = {
  r: number;
  g: number;
  b: number;
  a: number;
};

export type ColorType = 'rgb' | 'hex' | 'hsl';
