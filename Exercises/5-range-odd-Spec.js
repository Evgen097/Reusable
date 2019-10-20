/* eslint-disable */
'use strict';

const path = require('path');
const fileName = path.basename(__filename).replace('-Spec', '');

const { rangeOdd } = require(`./${fileName}`);

describe( "5-range-Odd", function () {

  const cases = [
    [[1, 3], [1, 3]],
    [[999, 1001], [999, 1001]],
    [[-1, 2], [-1, 1]],
    [[15, 30], [15, 17, 19, 21, 23, 25, 27, 29]],

  ]

  it('should print greeting with single argument', ()=> {
    cases.forEach(item =>{
      expect(rangeOdd(item[0])).toEqual(item[1])
    })
  })

})








