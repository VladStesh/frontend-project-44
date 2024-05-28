import runGame from '../../index.js';
import { randomInteger, isPrime } from '../util.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const questionNumb = randomInteger(1, 10);
  const correctAnswer = isPrime(questionNumb) ? 'yes' : 'no';
  return [questionNumb, correctAnswer];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
