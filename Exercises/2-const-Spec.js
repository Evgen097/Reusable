/* eslint-disable */
'use strict';

const path = require('path');
const fileName = path.basename(__filename).replace('-Spec', '');

const { year } = require(`./${fileName}`);

describe( "2-const", function () {

  it('should Define constant to store year as a number', ()=> {
    expect(typeof year).toEqual('number')
  })

})








