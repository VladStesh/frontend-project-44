import game from '../index.js';
import { randomInteger } from '../util.js';

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
    let start = randomInteger(1, 100);
    let step = randomInteger(1, 10);
    let count = randomInteger(5, 10);

    let progression = [];
    for (let i = 0; i <= count; i++) {
        progression.push(start + i * step);
    }

    let key = randomInteger(0, progression.length - 1)

    const correctAnswer = progression[key].toString();
    progression[key] = '..';
    const question = progression.join(' ');

    return [question, correctAnswer];
}


export default () => {
    game(description, getQuestionAndAnswer);
};