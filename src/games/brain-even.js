import question from '../components/question.js';
import wrongAnswer from '../components/wrongAnswer.js';

const brainEven = (name) => {
  const RANDOM_COEFFICIENT = 100;
  const number = Math.floor(Math.random() * RANDOM_COEFFICIENT);
  const isEven = number % 2 === 0;
  const answer = question(number);

  if ((isEven && answer === 'yes') || (!isEven && answer === 'no')) {
    console.log('Correct!');
    return true;
  }
  const correctAnswer = answer === 'yes' ? 'no' : 'yes';
  wrongAnswer(answer, correctAnswer, name);
  return false;
};

export default brainEven;
