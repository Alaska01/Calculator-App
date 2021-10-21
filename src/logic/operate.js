import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  const num1 = new Big(numberOne);
  const num2 = new Big(numberTwo);
  if (operation === '-') {
    result = num1.minus(num2);
  } else if (operation === '+') {
    result = num1.plus(num2);
  } else if (operation === 'x') {
    result = num1.times(num2);
  } else if (operation === '÷') {
    if (numberTwo !== '0') {
      result = num1.div(num2);
    } else {
      return 'Division by zero Error';
    }
  } else if (operation === '%') {
    result = num1.div(100);
  }
  return result.toString();
};

export default operate;
