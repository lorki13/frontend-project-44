import runGame from '../index.js';

const description = 'What is the result of the expression?';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const getRoundData = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();

  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * operations.length)];

  let result;

  switch (operation) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }

  const question = `${number1} ${operation} ${number2}`;

  return [question, String(result)];
};

const calcGame = () => {
  runGame(description, getRoundData);
};

export default calcGame;