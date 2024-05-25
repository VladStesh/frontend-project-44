import game from '../index.js';
import { randomInteger } from '../util.js';

const descriptionCalc = 'What is the result of the expression?';

const symbolsToOperations = {'+': (a, b) => a + b, '-': (a, b) => a - b, '*': (a, b) => a * b};

const getQuestionAndAnswer = () => {
    const num1 = randomInteger(1, 100);
    const num2 = randomInteger(1, 100);
    const symbols = Object.keys(symbolsToOperations);
    const symbol = symbols[randomInteger(0, symbols.length - 1)];

    let question = `${num1} ${symbol} ${num2}`;
    let correctAnswer = symbolsToOperations[symbol](num1, num2).toString();
    return [question, correctAnswer];
};

export default () => {
    game(descriptionCalc, getQuestionAndAnswer);
};
