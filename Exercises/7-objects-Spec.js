/* eslint-disable */
'use strict';

const path = require('path');
const fileName = path.basename(__filename).replace('-Spec', '');

const { fn } = require(`./${fileName}`);

describe( "5-range-Odd", function () {

  it('should include let and const', ()=> {
    let src = fn.toString();
    expect(src.includes('const')).toEqual(true);
    expect(src.includes('let')).toEqual(true)
  })

})








