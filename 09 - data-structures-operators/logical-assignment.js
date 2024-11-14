const rest01 = {
  name: 'Capri',
  numGuests: 20,
};

const rest02 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

const rest03 = {
  name: 'Tomatino',
  numGuests: 0,
};

console.log('OR assignment operator');

//rest01.numGuests = rest01.numGuests || 10;
rest01.numGuests ||= 10;
console.log(rest01);

//rest02.numGuests = rest02.numGuests || 10;
rest02.numGuests ||= 10;
console.log(rest02);

//rest03.numGuests = rest03.numGuests || 10;
rest03.numGuests ||= 10;
console.log(rest03);

const user01 = {
  login: 'april.white',
  password: 7825,
};

const user02 = {
  login: 'charles.green',
};

const user03 = {
  login: 'thompson.bird',
  password: null,
};

console.log('Nullist assignment operator');

//user01.password = user01.password ?? 1234;
user01.password ??= 1234;
console.log(user01);

//user02.password = user02.password ?? 1234;
user02.password ??= 1234;
console.log(user02);

//user03.password = user03.password ?? 1234;
user03.password ??= 1234;
console.log(user03);
