'use strict';
// ## Объекты
// 7. Выполнить следующие пункты внутри функции `fn`
// (см. заготовку: `7-objects.js`)
// - Создайте объект с одним полем `name` и присвойте его в константу.
// - Создайте объект с одним полем `name` и присвойте его в переменную.
// - Попробуйте поменять поле `name` у обоих объектов.
// - Попробуйте присвоить другой объект в оба идентификатора.
// - Объясните поведение кода и оставьте только рабочий код.


const fn = () => {
  const person = { name: 'Petro' };
  let personSecond = { name: 'Petro' };
  // console.log({ person, personSecond })
  person.name = 'Ivan';
  personSecond = 'Ivan';
  personSecond = { name: 'Leonid' };
  return { person, personSecond };
};

module.exports = { fn };
