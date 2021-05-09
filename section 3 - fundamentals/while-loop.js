// using for loop
for (let i = 1; i <= 10; i++) {
  console.log(`Repetition: ${i}`);
}

//using while loop
let rep = 1;
while (rep <= 5) {
  console.log(`While: Repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}
