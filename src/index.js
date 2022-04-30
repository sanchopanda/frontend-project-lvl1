import readlineSync from 'readline-sync';

const gameConstructor = (game) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}`);

  game(name);

  console.log(`Congratulations, ${name}!`);
};

export default gameConstructor;
