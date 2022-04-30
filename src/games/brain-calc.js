import askQuestion from '../components/ask-question.js';

const result = (i, a, b) => {
  const operators = ['+', '-', '*'];
  const results = [a + b, a - b, a * b];

  return [operators[i], String(results[i])];
};

const brainCalc = (name, STEPS = 3) => {
  const OPERATOR_COEFFICIENT = 3;
  const NUMBER_COEFFICIENT = 10;

  console.log('What is the result of the expression?');

  let counter = 0;

  while (counter < STEPS) {
    const operatorIndex = Math.floor(Math.random() * OPERATOR_COEFFICIENT);
    const firstNumber = Math.floor(Math.random() * NUMBER_COEFFICIENT);
    const secondNumber = Math.floor(Math.random() * NUMBER_COEFFICIENT);

    const [operator, correctAnswer] = result(operatorIndex, firstNumber, secondNumber);

    const questionSting = `${firstNumber} ${operator} ${secondNumber}`;

    const isValidAnswer = askQuestion(questionSting, correctAnswer, name);

    counter = isValidAnswer ? counter + 1 : 0;
  }
};

export default brainCalc;
