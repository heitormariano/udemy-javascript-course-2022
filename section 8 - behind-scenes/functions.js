const john = {
  name: 'John',
  birthYear: 1990,
  calcAge: function () {
    console.log(`Age: ${new Date().getFullYear() - this.birthYear}`);
  },
  greet: function () {
    console.log(`Hi ${this.name}`);
  },
};

john.calcAge();
john.greet();

const mary = {
  name: 'Mary',
  friends: ['John', 'Matilda', 'Jonas'],
  showFriends: function () {
    // arrow function inherits the 'this' keyword from parent scope
    this.friends.forEach(friend => {
      console.log(`${this.name} is ${friend}'s friend`);
    });
  },
};

mary.showFriends();

const video = {
  title: 'Titulo Video',
  tags: ['a', 'b', 'c', 'd'],
  showTags: function () {
    // passing 'this' keyword to the second argument of forEach method
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);
  },
};

video.showTags();

// arguments keyword (exists only in regular functions)
const addExpr = function (a, b) {
  console.log(arguments);
  console.log(a + b);
};

// const addArrow = (a, b) => {
//   console.log(arguments);
//   console.log(a + b);
// };

addExpr(10, 30);
addExpr(10, 30, 120, 300);
// addArrow(200, 400);
