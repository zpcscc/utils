import styledToString from '../styledToString';
import type { StyledType } from '../type';

const styled: StyledType = {
  width: '100px',
  label: {
    color: 'red',
  },
  '.className': {
    height: '100px',
    display: 'none',
    '& > div': {
      'background-color': 'red',
    },
  },
  '.className::after': {
    content: ':',
  },
};

const string =
  "&{width:100px;label{color:red;}.className{height:100px;display:none;& > div{background-color:red;}}.className::after{content:':';}}";

describe('styledToString', () => {
  test('styled对象数据', () => {
    expect(styledToString(styled)).toBe(string);
  });
  test('空字符串', () => {
    expect(styledToString('')).toBe('');
  });
  test('字符串', () => {
    expect(styledToString('width:100px')).toBe('width:100px');
  });
});
