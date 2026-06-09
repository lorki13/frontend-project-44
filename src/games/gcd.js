import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const getGcd = (a, b) => {
  let x = a;
  let y = b;

  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }

  return x;
};

const getRoundData = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();

  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGcd(number1, number2));

  return [question, correctAnswer];
};

const gcdGame = () => {
  runGame(description, getRoundData);
};

export default gcdGame;