import game from '../index.js';
import { randomInteger } from '../util.js';

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const start = randomInteger(1, 100);
  const step = randomInteger(1, 10);
  const count = randomInteger(5, 10);

  const progression = [];
  for (let i = 0; i <= count; i += 1) {
    progression.push(start + i * step);
  }

  const key = randomInteger(0, progression.length - 1);

  const correctAnswer = progression[key].toString();
  progression[key] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
