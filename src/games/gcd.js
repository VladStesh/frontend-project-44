import game from '../index.js';
import { randomInteger, getGcd } from '../util.js';

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const num1 = randomInteger(1, 100);
  const num2 = randomInteger(1, 100);

  const gcd = getGcd(num1, num2);

  const question = `${num1} ${num2}`;
  const correctAnswer = gcd.toString();
  return [question, correctAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
