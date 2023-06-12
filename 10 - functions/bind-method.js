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

const eurowings = {
  airline: 'eurowings',
  iataCode: 'EW',
  booking: [],
};

const book = lufthansa.book;

// call method
book.call(eurowings, 556, 'Sarah Williams');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  booking: [],
};

// apply method
const flightData = [578, 'Mary Cooper'];
book.apply(swiss, flightData);

// bind method
const bookLH = book.bind(lufthansa);
bookLH(569, 'Peter Parker');

const bookEW = book.bind(eurowings);
bookEW(233, 'Mary Jane');

const bookLX = book.bind(swiss);
bookLX(788, 'Josh White');

console.log(swiss);

// Testing in web browser
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log('Using this...');
  console.log(this);

  this.planes++;
  console.log('Printing planes...');
  console.log(this.planes);
};
// lufthansa.buyPlane();
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
