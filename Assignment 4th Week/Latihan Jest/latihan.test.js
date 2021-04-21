const { expect } = require("@jest/globals")
const {sum, printSquare, thisReverse, primeNumber, groupingBasedOnAges } = require('./latihan');

test('adds 1 + 2 to equal 3', () => {
  expect( sum(1, 2)).toBe(3);
});

test('print squared numbers from 1 to 10', () => {
  expect(printSquare(10)).toStrictEqual([1, 4, 9, 16, 25, 36, 49, 64, 81, 100]);
});

test ('reverse numbers 1234 to be 4321', () => {
  expect(thisReverse(1234)).toBe(4321);
});

test('input 5, then 5 is a Prime number', () => {
  expect(primeNumber(5)).toStrictEqual("is Prime");
});

test('input 8, then 8 is not a Prime number', () => {
  expect(primeNumber(8)).toStrictEqual("is not Prime");
});

test('if input age is 19, then result is Remaja', () => {
  expect(groupingBasedOnAges(19)).toStrictEqual('Remaja');
});
