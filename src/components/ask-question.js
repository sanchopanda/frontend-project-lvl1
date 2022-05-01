import readlineSync from 'readline-sync';

const askQuestion = (questionString, correctAnswer, name) => {
  console.log(`Question: ${questionString}`);
  const answer = readlineSync.question('Your answer: ');

  console.log(answer, correctAnswer, answer === correctAnswer)

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

export default askQuestion;
