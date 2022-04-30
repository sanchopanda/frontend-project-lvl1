import readlineSync from 'readline-sync';

const question = (questionSting) => {
  console.log(`Question: ${questionSting}`);
  return readlineSync.question('Your answer ');
};

export default question;
