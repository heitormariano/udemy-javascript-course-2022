console.log('Desafio IMC');

const alturaJohn = 1.7;
const pesoJohn = 75;
const imcJohn = pesoJohn / alturaJohn ** 2;

const alturaMary = 1.58;
const pesoMary = 62;
const imcMary = pesoMary / alturaMary ** 2;

console.log('IMC - Jonh: ' + imcJohn);
console.log('IMC - Mary: ' + imcMary);

const imcJohnMaior = imcJohn > imcMary;

if (imcJohnMaior) {
  console.log('John tem maior IMC');
} else {
  console.log('Mary tem maior IMC');
}
