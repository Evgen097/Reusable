'use strict';
// ## Functions
// 6. Call function from function in loop

// - Implement function `square` with signature
//   `square(x: number): number` calculating square of x.
const square = x => x * x;

// - Implement function `cube` with signature
//   `cube(x: number): number` calculating cube of x.
const cube = x => x ** 3;

// - Implement function `average` with signature
//`average(a: number, b: number): number` calculating average (arithmetic mean).
const average = (a, b) => (a + b) / 2;

const calculate = (start = 0, end = 9) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    const currentAverage = average(square(i), cube(i));
    result.push(currentAverage);
  }
  return result;
};

// - Call `square` and `cube` in loop 0 to 9, pass results to function `average`
// on each iteration. Add calculation results to array and
// return this array from function `calculate`.
//
//   Call functions `square` and `cube` in loop, then pass their results to
// function `average`. Print what `average` returns.

module.exports = { square, cube, average, calculate };
