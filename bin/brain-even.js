#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');

console.log(`Hello, ${name}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const REQUIRES = 3;
const RANDOM_COEFFICIENT = 100;
let counter = 0;

while (counter < REQUIRES) {
  const number = Math.floor(Math.random() * RANDOM_COEFFICIENT);
  const isEven = number % 2 === 0;
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer ');

  if ((isEven && answer === 'yes') || (!isEven && answer === 'no')) {
    console.log('Correct!');
    counter += 1;
  } else {
    const correctAnswer = answer === 'yes' ? 'no' : 'yes';
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log('Let\'s try again, Bill!');
    counter = 0;
  }
}

console.log(`Congratulations, ${name}!`);
