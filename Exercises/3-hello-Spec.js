/* eslint-disable */
'use strict';

const path = require('path');
const fileName = path.basename(__filename).replace('-Spec', '');

const { hello } = require(`./${fileName}`);

describe( "3-hello", function () {

  it('should print greeting with single argument', ()=> {
    const reg = /log/;
    expect(reg.test(hello.toString())).toEqual(true)
  })

})








