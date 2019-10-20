'use strict';

// ## Loops
// 4. Implement function `range(start: number, end: number): array` returning
// array with all numbers from the range [15, 30] including endpoints.

const range = ([start, end]) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};
module.exports = { range };
