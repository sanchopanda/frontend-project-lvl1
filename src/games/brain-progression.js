import askQuestion from '../components/ask-question.js';
import getRandomInt from '../components/getRandomInt.js';

const brainProgression = (name, STEPS = 3) => {
  const NUMBER_COEFFICIENT = 15;
  const STEP_COEFFICIENT = 5;

  let counter = 0;

  while (counter < STEPS) {
    const length = getRandomInt(5, NUMBER_COEFFICIENT);
    const position = getRandomInt(0, length);
    const step = getRandomInt(1, STEP_COEFFICIENT);

    const progression = [];
    let number = getRandomInt(0, NUMBER_COEFFICIENT);

    for (let i = 0; i <= length; i += 1) {
      progression.push(number);
      number += step;
    }

    const correctAnswer = String(progression[position]);
    progression[position] = '..';

    const questionSting = `${progression.join(' ')}`;

    const isValidAnswer = askQuestion(questionSting, correctAnswer, name);

    counter = isValidAnswer ? counter + 1 : 0;
  }
};

export default brainProgression;
