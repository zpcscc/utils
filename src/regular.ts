// ** 一些正则校验的规则

// 匹配所有数字
export const digitRegExp = /-?\d+\.?\d+/;

// 整数
export const integerRegExp = /-?\d+/;
// 正整数
export const integerPlusRegExp = /\d+/;
// 负整数
export const integerMinusRegExp = /-\d+/;

// 小数
export const decimalRegExp = /-?\d+\.\d+/;
// 正小数
export const decimalPlusRegExp = /\d+\.\d+/;
// 负小数
export const decimalMinusRegExp = /-\d+\.\d+/;

// 空格
export const trimRegExp = /\s+/;

// ** 以下是严格匹配的正则。规定了起止符。不建议在match中使用
// 整数严格匹配
export const integerStrictRegExp = /(^-?[1-9](\d*)$|^-?\d$)/;

// 邮箱严格匹配
export const emailStrictRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 身份证严格匹配
export const IDCardStrictRegExp =
  /^[1-9]\d{7}((0\d)|(1[0-2]))(([0-2|]\d)|3[01])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0-2|]\d)|3[01])\d{3}(\d|X)$/;

// 手机号严格匹配
export const phoneNumberStrictRegExp =
  /^1(3\d|4[014-9]|5[0-35-9]|6[25-7]|7[0-8]|8\d|9[0-35-9])\d{8}$/;

// url链接严格匹配
export const urlStrictRegExp = /^(http|https|ftp|file):\/\/([\w.]+\/?)\S*/;

// 二进制
export const binaryStrictRegExp = /^0b[01]+$/;

// 八进制
export const octalStrictRegExp = /^0o[0-7]+$/;
