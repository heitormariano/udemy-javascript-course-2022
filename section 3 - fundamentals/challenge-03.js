const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  calcBMI: function () {
    this.bmi = (this.mass / this.height ** 2).toFixed(2);
    return this.bmi;
  },
};

const john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  calcBMI: function () {
    this.bmi = (this.mass / this.height ** 2).toFixed(2);
    return this.bmi;
  },
};

mark.calcBMI(); // bmi is calculated and defined
john.calcBMI(); // bmi is calculated and defined

console.log(`${mark.getFullName()} - BMI: ${mark.bmi}`);
console.log(`${john.getFullName()} - BMI: ${john.bmi}`);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})!`
  );
} else {
  console.log(
    `${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})!`
  );
}
