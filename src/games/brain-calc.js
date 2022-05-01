import askQuestion from '../components/ask-question.js';
import getRandomInt from '../components/getRandomInt.js';

const result = (i, a, b) => {
  const operators = ['+', '-', '*'];
  const results = [a + b, a - b, a * b];

  console.log(i, a, b, operators, results)

  return [operators[i], String(results[i])];
};

const brainCalc = (STEPS = 3) => {
  const OPERATOR_COEFFICIENT = 3;
  const NUMBER_COEFFICIENT = 10;

  console.log('What is the result of the expression?');

  let counter = 0;

  while (counter < STEPS) {
    const operatorIndex = getRandomInt(0, OPERATOR_COEFFICIENT);
    const firstNumber = getRandomInt(0, NUMBER_COEFFICIENT);
    const secondNumber = getRandomInt(0, NUMBER_COEFFICIENT);

    const [operator, correctAnswer] = result(operatorIndex, firstNumber, secondNumber);

    const questionSting = `${firstNumber} ${operator} ${secondNumber}`;

    const isValidAnswer = askQuestion(questionSting, correctAnswer);

    if (!isValidAnswer) return false;

    counter += 1;
  }

  return true;
};

export default brainCalc;
