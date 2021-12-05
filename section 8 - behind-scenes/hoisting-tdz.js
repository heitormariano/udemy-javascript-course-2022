// variables
console.log(name);
//console.log(job);
//console.log(birthYear);

var name = 'Heitor';
let job = 'teacher';
const birthYear = 1980;

// functions
console.log(addDecl(4, 6));
//console.log(addExpr(4, 6));
//console.log(addArrow(4, 6));

function addDecl(a, b) {
  return a + b;
}

let addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
