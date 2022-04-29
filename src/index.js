import readlineSync from 'readline-sync';

const gameConstructor = (game) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const REQUIRES = 3;

  let counter = 0;

  while (counter < REQUIRES) {
    const result = game(name);
    counter = result ? counter + 1 : 0;
  }

  console.log(`Congratulations, ${name}!`);
};

export default gameConstructor;
