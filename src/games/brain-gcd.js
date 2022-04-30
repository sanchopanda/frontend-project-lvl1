import askQuestion from '../components/ask-question.js';
import getRandomInt from '../components/getRandomInt.js';

const findGCD = (a, b) => {
  if (b) {
    return findGCD(b, a % b);
  }
  return String(a);
};

const brainGcd = (name, STEPS = 3) => {
  const NUMBER_COEFFICIENT = 100;

  console.log('Find the greatest common divisor of given numbers.');

  let counter = 0;

  while (counter < STEPS) {
    const firstNumber = getRandomInt(0, NUMBER_COEFFICIENT);
    const secondNumber = getRandomInt(0, NUMBER_COEFFICIENT);

    const correctAnswer = findGCD(firstNumber, secondNumber);

    const questionSting = `${firstNumber}  ${secondNumber}`;

    const isValidAnswer = askQuestion(questionSting, correctAnswer, name);

    counter = isValidAnswer ? counter + 1 : 0;
  }
};

export default brainGcd;
