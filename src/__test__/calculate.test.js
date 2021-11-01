import operate from '../logic/operate';
import calculate from '../logic/calculate';

it('returns the addition of two numbers', () => {
  const result = operate(5, 8, '+');
  expect(result).toBe('13');
});

it('returns the addition of two numbers as not equal', () => {
  const result = operate(5, 8, '+');
  expect(result).not.toBe('10');
});

it('returns the subtraction of two numbers', () => {
  const result = operate(8, 5, '-');
  expect(result).toBe('3');
});

it('returns the subtraction of two numbers', () => {
  const result = operate(8, 5, '-');
  expect(result).not.toBe('4');
});

it('returns the product of two digits', () => {
  const result = calculate({
    total: '8', next: '5', operation: 'x', totalCalc: true,
  }, '=');
  expect(result).toStrictEqual({
    total: '40', next: null, operation: null, totalCalc: false,
  });
});

it('returns the product of two digits', () => {
  const result = calculate({
    total: '8', next: '5', operation: 'x', totalCalc: true,
  }, '=');
  expect(result).not.toBe({
    total: '40', next: null, operation: null, totalCalc: false,
  });
});

it('returns the division of two digits', () => {
  const result = calculate({
    total: '10', next: '5', operation: '÷', totalCalc: true,
  }, '=');
  expect(result).toStrictEqual({
    total: '2', next: null, operation: null, totalCalc: false,
  });
});

it('returns the division of two digits', () => {
  const result = calculate({
    total: '10', next: '5', operation: '÷', totalCalc: true,
  }, '=');
  expect(result).not.toStrictEqual({
    total: '2', next: null, operation: null, totalCalc: true,
  });
});
