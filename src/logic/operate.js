import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let total;
  const num1 = new Big(numberOne);
  const num2 = new Big(numberTwo);

  if (operation === '-') {
    total = num1.minus(num2);
  } else if (operation === '+') {
    total = num1.plus(num2);
  } else if (operation === 'X') {
    total = num1.times(num2);
  } else if (operation === '÷') {
    if (numberTwo === 0) {
      total = 'Zero divide Error';
    } else {
      total = num1.div(num2);
    }
  } else if (operation === '%') {
    total = num1.div(100);
  }
  return total.toString();
};

export default operate;
