import { getSequenceDivisibleBy3, getCountIntegersDivisebleBy3 } from './index';

test('Get sequence divisible by 3', () => {
  expect(getSequenceDivisibleBy3(1, 9)).toEqual([3, 6, 9]);
  expect(getSequenceDivisibleBy3(0, 10)).toEqual([3, 6, 9]);
  expect(getSequenceDivisibleBy3(-3, 10)).toEqual([-3, 3, 6, 9]);
  expect(getSequenceDivisibleBy3(1, 2)).toEqual([]);
});

test('Get count integers divisible by 3', () => {
  expect(getCountIntegersDivisebleBy3(1, 9)).toBe(3);
  expect(getCountIntegersDivisebleBy3(1, 100)).toBe(33);
  expect(getCountIntegersDivisebleBy3(1, 2)).toBe(0);
  expect(getCountIntegersDivisebleBy3(-3, 3)).toBe(2);
});
