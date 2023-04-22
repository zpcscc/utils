import sortVersions from '../sortVersions';

const beforeSort = [
  '1.2.1',
  '1.1.1',
  '1.1.1-release.2',
  '1.1.1-alpha.10',
  '1.1.1-release.1',
  '1.1.1-beta.1',
  '1.1.1-experimental.1',
  '1.1.1-rc.1',
  '1.1.1-rc.1',
  '1.1.2-alpha.1',
];

const afterSort = [
  '1.1.1-experimental.1',
  '1.1.1-alpha.10',
  '1.1.1-beta.1',
  '1.1.1-rc.1',
  '1.1.1-rc.1',
  '1.1.1-release.1',
  '1.1.1-release.2',
  '1.1.1',
  '1.1.2-alpha.1',
  '1.2.1',
];

describe('版本号排序', () => {
  test('排序', () => {
    expect(sortVersions(sortVersions(beforeSort))).toStrictEqual(afterSort);
  });
});
