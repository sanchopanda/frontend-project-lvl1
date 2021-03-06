import readlineSync from 'readline-sync';

const gameConstructor = (game) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}`);

  const result = game();

  if (result) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default gameConstructor;
