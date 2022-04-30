import askQuestion from '../components/ask-question.js';

const brainEven = (name, STEPS = 3) => {
  const RANDOM_COEFFICIENT = 100;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let counter = 0;

  while (counter < STEPS) {
    const number = Math.floor(Math.random() * RANDOM_COEFFICIENT);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

    const questionSting = `${number}`;

    const isValidAnswer = askQuestion(questionSting, correctAnswer, name);

    counter = isValidAnswer ? counter + 1 : 0;
  }
};

export default brainEven;
