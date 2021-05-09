const countries = ['India', 'USA', 'Brazil', 'Japan'];

for (let i = countries.length - 1; i >= 0; i--) {
  console.log(`Index: ${i} - Element: ${countries[i]}`);
}

const exercises = ['lunges', 'pushups', 'squats', 'Dumbbell rows'];

for (let i = 0; i < exercises.length; i++) {
  console.log(`----------Exercise ${exercises[i]}----------`);
  for (let j = 0; j < 3; j++) {
    console.log(`Repetition ${j + 1}...`);
  }
}
