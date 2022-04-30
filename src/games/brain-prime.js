import askQuestion from '../components/ask-question.js';
import getRandomInt from '../components/getRandomInt.js';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num);) {
    if (num % i === 0) return 'no';
    // eslint-disable-next-line no-unused-expressions
    i === 2 ? i += 1 : i += 2;
  }
  return num > 1 ? 'yes' : 'no';
};

const brainPrime = (name, STEPS = 3) => {
  const NUMBER_COEFFICIENT = 100;

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let counter = 0;

  while (counter < STEPS) {
    const number = getRandomInt(2, NUMBER_COEFFICIENT);

    const correctAnswer = isPrime(number);

    const isValidAnswer = askQuestion(number, correctAnswer, name);

    counter = isValidAnswer ? counter + 1 : 0;
  }
};

export default brainPrime;
