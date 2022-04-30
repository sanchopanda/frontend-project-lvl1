import readlineSync from 'readline-sync';

const result = (i, a, b) => {
  const operators = ['+', '-', '*'];
  const results = [a + b, a - b, a * b];

  return [operators[i], results[i]];
};

const brainCalc = (name) => {
  const OPERATOR_COEFFICIENT = 3;
  const NUMBER_COEFFICIENT = 10;

  const operatorIndex = Math.floor(Math.random() * OPERATOR_COEFFICIENT);
  const firstNumber = Math.floor(Math.random() * NUMBER_COEFFICIENT);
  const secondNumber = Math.floor(Math.random() * NUMBER_COEFFICIENT);

  const [operator, correctAnswer] = result(operatorIndex, firstNumber, secondNumber);

  console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);
  const answer = Number(readlineSync.question('Your answer '));

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

export default brainCalc;
