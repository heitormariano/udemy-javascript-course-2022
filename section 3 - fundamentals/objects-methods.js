const heitor = {
  firstName: 'Heitor',
  lastName: 'Camara',
  birthYear: 1987,
  job: 'teacher',
  friends: ['Michael', 'Jonas', 'Philip'],
  hasDriversLicense: false,

  // calcAge: function () {
  //   return new Date().getFullYear() - this.birthYear;
  // },

  calcAge: function () {
    this.age = new Date().getFullYear() - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    console.log(
      `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${
        this.hasDriversLicense ? 'a' : 'no'
      } driver's license.`
    );
  },
};

// calling calcAge() once
console.log(heitor.calcAge());

//retrieving the age several times (Using property age)
console.log(heitor.age);
console.log(heitor.age);
console.log(heitor.age);

// challenge
heitor.getSummary();
