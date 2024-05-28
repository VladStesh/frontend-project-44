import runGame from '../../index.js';
import { randomInteger } from '../util.js';

const description = 'What is the result of the expression?';

const mathOperations = { '+': (a, b) => a + b, '-': (a, b) => a - b, '*': (a, b) => a * b };

const getQuestionAndAnswer = () => {
  const num1 = randomInteger(1, 100);
  const num2 = randomInteger(1, 100);
  const symbols = Object.keys(mathOperations);
  const symbol = symbols[randomInteger(0, symbols.length - 1)];

  const question = `${num1} ${symbol} ${num2}`;
  const correctAnswer = mathOperations[symbol](num1, num2).toString();
  return [question, correctAnswer];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
