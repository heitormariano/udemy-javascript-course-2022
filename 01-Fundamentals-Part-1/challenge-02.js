const alturaJohn = 1.7;
const pesoJohn = 75;
const imcJohn = pesoJohn / alturaJohn ** 2;

const alturaMary = 1.58;
const pesoMary = 62;
const imcMary = pesoMary / alturaMary ** 2;

// using toFixed()
if (imcJohn > imcMary) {
  console.log('IMC do John maior que o da Mary');
  console.log(`IMC John: ${imcJohn.toFixed(2)}. IMC Mary: ${imcMary.toFixed(2)}`);
} else {
  console.log('IMC da Mary maior que o do John');
  console.log(`IMC Mary: ${imcMary.toFixed(2)}. IMC John: ${imcJohn.toFixed(2)}`);
}
