let phonebook = {}

const cases = [
  { name: 'Some test person1', phone: '+380445554431' },
  { name: 'Some test person2', phone: '+380445554432' },
  { name: 'Some test person3', phone: '+380445554433' },
]



  cases.forEach(item => {
    phonebook[item.name] = 'd'
    console.log(phonebook)
  });