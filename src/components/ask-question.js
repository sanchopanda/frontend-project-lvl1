import readlineSync from 'readline-sync';

const askQuestion = (questionString, correctAnswer, name) => {
  console.log(`Question: ${questionString}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export default askQuestion;
