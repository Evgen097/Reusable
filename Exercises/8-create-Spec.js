/* eslint-disable */
'use strict';

const path = require('path');
const fileName = path.basename(__filename).replace('-Spec', '');

const { createUser } = require(`./${fileName}`);

describe( "8-createUser", function () {

  const cases = [
    ['Marcus Aurelius', 'Roma', { name: 'Marcus Aurelius', city: 'Roma' }],
    ['Vladimir Zelenskiy', 'Krivoy Rog', { name: 'Vladimir Zelenskiy', city: 'Krivoy Rog' }],
    ['Poroshenko', 'Vinnica', { name: 'Poroshenko', city: 'Vinnica' }],
  ]

  it('should функция должна вернуть объект', ()=> {
    cases.forEach(item =>{
      expect(createUser(item[0], item[1])).toEqual(item[2])
    })
  })

})








