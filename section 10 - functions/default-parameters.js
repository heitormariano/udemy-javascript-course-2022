const bookingsList = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookingsList.push(booking);
};

createBooking('LH100', 10, 340000);
createBooking('LH200', 6);
createBooking('LH200', undefined, 56980);
