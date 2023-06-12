const flight = 'LBA290';

const mary = {
  name: 'Mary',
  passport: 123456,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'CPW560';

  passenger.name = `Mrs ${passenger.name}`;

  if (passenger.passport == 123456) {
    console.log('Check in');
  } else {
    console.log('Wrong passport!');
  }
};

console.log(flight);
checkIn(flight, mary);

console.log(mary);

// Passing Arguments (Values vs. Reference)
// Function checkin (behind the scenes)
// const flightNum = flight (Primitive type - Copy of value)
// const passenger = mary (Object - Copy of reference)
