import _ from 'lodash';

const getSuquence = (a, b) => _.range(a, b + 1);

const getSequenceDivisibleBy = (a, b, divisor) => getSuquence(a, b)
  .filter((num) => (num === 0 ? false : num % divisor === 0));

const getSequenceDivisibleBy3 = (a, b) => getSequenceDivisibleBy(a, b, 3);

const getCountIntegersDivisebleBy3 = (a, b) => getSequenceDivisibleBy3(a, b).length;

export { getSequenceDivisibleBy3, getCountIntegersDivisebleBy3 };
