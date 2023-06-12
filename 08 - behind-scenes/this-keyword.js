const john = {
  birthYear: 1987,
  calcAge: function () {
    console.log(this);
    console.log(`Age ${new Date().getFullYear() - this.birthYear}`);
  },
};

john.calcAge();

const mary = {
  birthYear: 1990,
};

mary.calcAge = john.calcAge;
mary.calcAge();

// const testFunc = john.calcAge;
// testFunc();
