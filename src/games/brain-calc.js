import question from '../components/question.js';
import wrongAnswer from '../components/wrongAnswer.js';

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

  const questionSting = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = question(questionSting);

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  wrongAnswer(answer, correctAnswer, name);
  return false;
};

export default brainCalc;
