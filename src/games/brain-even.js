import readlineSync from 'readline-sync';

const brainEven = (name) => {
  const RANDOM_COEFFICIENT = 100;
  const number = Math.floor(Math.random() * RANDOM_COEFFICIENT);
  const isEven = number % 2 === 0;
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer ');

  if ((isEven && answer === 'yes') || (!isEven && answer === 'no')) {
    console.log('Correct!');
    return true;
  }
  const correctAnswer = answer === 'yes' ? 'no' : 'yes';
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let\'s try again, ${name}!`);
  return false;
};

export default brainEven;
