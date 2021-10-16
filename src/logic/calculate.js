import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;
  const operands = ['+', '-', 'x', '÷', '%'];
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

  if (buttonName === '+/-') {
    (total *= -1).toString();
    if (next) (next *= -1).toString();
  } else if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (buttonName === '%' && (total !== null || total !== undefined)) {
    (total /= 100).toString();
    operation = null;
  }

  if (digits.includes(buttonName) && operation === null) {
    total = total === null ? buttonName : total + buttonName;
  } else if (digits.includes(buttonName) && operation !== null) {
    next = next === null ? buttonName : next + buttonName;
  } else if (
    operands.includes(buttonName)
    && (total !== null || total !== undefined)
  ) {
    operation = buttonName;
  } else if (buttonName === '=' && total !== null && next !== null) {
    if (operands.includes(operation)) total = operate(total, next, operation);
    operation = null;
    next = null;
  }

  return { total, next, operation };
};

export default calculate;
