/* eslint-disable */
'use strict';

const path = require('path');
const fileName = path.basename(__filename).replace('-Spec', '');

const { square, cube, average, calculate } = require(`./${fileName}`);

describe( "6-calculate", function () {

  describe( "square", function () {
    const cases = [
      [1, 1],
      [2, 4],
      [10, 100],
      [5, 25],
      [-1, 1],
      [-2, 4],
    ];
    it('should calculating square of x', ()=> {
      cases.forEach(item =>{
        expect(square(item[0])).toEqual(item[1])
      })
    })
  })

  describe( "cube", function () {
    const cases = [
      [1, 1],
      [2, 8],
      [10, 1000],
      [5, 125],
      [-1, -1],
      [-2, -8],
    ];
    it('should calculating cube of x', ()=> {
      cases.forEach(item =>{
        expect(cube(item[0])).toEqual(item[1])
      })
    })
  })

  describe( "average", function () {
    const cases = [
      [0, 0, 0],
      [1, 1, 1],
      [2, 3, 2.5],
      [5, 5, 5],
      [-1, -3, -2],
      [-2, -8, -5],
    ];
    it('should calculating average ', ()=> {
      cases.forEach(item =>{
        expect(average(item[0], item[1])).toEqual(item[2])
      })
    })
  });

  describe( "calculate", function () {
    const cases = [
      [0, 9, [0, 1, 6, 18, 40, 75, 126, 196, 288, 405]],
    ];
    it('should calculating average ', ()=> {
      cases.forEach(item =>{
        expect(calculate(item[0], item[1])).toEqual(item[2])
      })
    })
  })

})






