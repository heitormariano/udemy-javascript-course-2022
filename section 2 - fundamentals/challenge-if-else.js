// Após o uso do switch foi aplicada a lógica na estrutura if-else

const dia = 'Quarta';

if (dia === 'Segunda') {
  console.log('Estudar Java');
} else if (dia === 'Terca') {
  console.log('Estudar JavaScript');
} else if (dia === 'Quarta' || dia == 'Quinta') {
  console.log('Estudar React');
  console.log('Estudar React Native');
} else if (dia === 'Sexta') {
  console.log('Descansar!');
} else if (dia === 'Sabado' || dia === 'Domingo') {
  console.log('Aproveitar a família');
} else {
  console.log('Dia inválido');
}
