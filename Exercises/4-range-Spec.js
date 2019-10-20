/* eslint-disable */
'use strict';

const path = require('path');
const fileName = path.basename(__filename).replace('-Spec', '');

const { range } = require(`./${fileName}`);

describe( "4-range", function () {

  const cases = [
    [[1, 3], [1, 2, 3]],
    [[999, 1001], [999, 1000, 1001]],
    [[-1, 2], [-1, 0, 1, 2]],
    [[15, 30], [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]],

  ]

  it('should print greeting with single argument', ()=> {
    cases.forEach(item =>{
      expect(range(item[0])).toEqual(item[1])
    })
  })

})








