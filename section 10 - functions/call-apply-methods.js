const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  booking: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(123, 'Mike Bird');
lufthansa.book(456, 'John Smith');

const eurowings = {
  airline: 'eurowings',
  iataCode: 'EW',
  booking: [],
};

const book = lufthansa.book;

// Does not weork
// book(23, 'Mathew Tompson');

// call method
book.call(eurowings, 556, 'Sarah Williams');
book.call(lufthansa, 239, 'Mark Rico');

// apply method
const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  booking: [],
};

const flightData = [578, 'Mary Cooper'];
const flightData2 = [898, 'Andrew Cooper'];

book.apply(swiss, flightData);

// another way to use call method
book.call(swiss, ...flightData2);
