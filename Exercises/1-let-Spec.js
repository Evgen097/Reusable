/* eslint-disable */
'use strict';

const path = require('path');
const fileName = path.basename(__filename).replace('-Spec', '');

const { name } = require(`./${fileName}`);

describe( "1-for", function () {

  it('should Define variable to store name as a string', ()=> {
    expect(typeof name).toEqual('string')
  })


})








