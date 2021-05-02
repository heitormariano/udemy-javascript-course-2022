// function declaration

// Usando a função antes da sua declaração/definição (funciona!)
const age = calcAge(1987);
console.log(age);

function calcAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}

// function expression
// função anônima

// tentativa de uso da função antes da sua definição
// Ocorreu erro --> ReferenceError: Cannot access 'calcAgeV2' before initialization
//const age2 = calcAgeV2(1990);

const calcAgeV2 = function (birthYear) {
  return new Date().getFullYear() - birthYear;
};

const age2 = calcAgeV2(1990);
console.log(age2);
