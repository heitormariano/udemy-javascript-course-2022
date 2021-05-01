const dia = 'Quarta';

switch (dia) {
  case 'Segunda':
    console.log('Estudar Java');
    break;
  case 'Terca':
    console.log('Estudar JavaScript');
    break;
  case 'Quarta':
  case 'Quinta':
    console.log('Estudar React');
    console.log('Estudar React Native');
    break;
  case 'Sexta':
    console.log('Descansar');
    break;
  case 'Sabado':
  case 'Domingo':
    console.log('Aproveitar a família');
    break;
  default:
    console.log('Dia inválido');
    break;
}
