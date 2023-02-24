import { dataToString, stringToData } from './index';

const data = {
  obj: {
    name: '测试',
  },
  array: ['测试'],
};

const string = `{
  "obj": {
    "name": "测试"
  },
  "array": [
    "测试"
  ]
}`;

test('data转string', () => {
  expect(dataToString(data)).toBe(string);
});

test('string转data', () => {
  expect(stringToData(string)).toStrictEqual(data);
});
