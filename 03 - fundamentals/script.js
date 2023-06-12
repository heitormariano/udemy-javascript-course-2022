'use strict';

let hasDriversLicense = false;
const passTest = true;

//ReferenceError: hasDriverLicense is not defined
// if (passTest) hasDriverLicense = true; // variável sem o s
// if (hasDriversLicense) console.log('I can drive man!');

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive man!');

//SyntaxError: Unexpected strict mode reserved word
//const interface = 'Test';
//const private  = 123;

//SyntaxError: Unexpected token 'if'
//const if = 'one more test';
