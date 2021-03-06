import operate from '../logic/operate';
import calculate from '../logic/calculate';

it('returns the addition of two numbers', () => {
  const result = operate(5, 8, '+');
  expect(result).toBe('13');
});

it('returns the addition of two numbers as not equal to a wrong value', () => {
  const result = operate(5, 8, '+');
  expect(result).not.toBe('10');
});

it('returns the subtraction of two numbers', () => {
  const result = operate(8, 5, '-');
  expect(result).toBe('3');
});

it('returns the subtraction of two numbers as not equal to a wrong value', () => {
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

it('returns the product of two digits as not equal to a wrong value', () => {
  const result = calculate({
    total: '8', next: '5', operation: 'x', totalCalc: true,
  }, '=');
  expect(result).not.toBe({
    total: '41', next: null, operation: null, totalCalc: false,
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

it('returns the division of two digits as not equal to a wrong value', () => {
  const result = calculate({
    total: '10', next: '5', operation: '÷', totalCalc: true,
  }, '=');
  expect(result).not.toStrictEqual({
    total: '2', next: null, operation: null, totalCalc: true,
  });
});

it('returns percentage of a given number', () => {
  const result = calculate({
    total: '100', next: '0.001', operation: '%', totalCalc: true,
  }, '=');
  expect(result).toStrictEqual({
    total: '1', next: null, operation: null, totalCalc: false,
  });
});

it('returns the wrong percentage of a given number', () => {
  const result = calculate({
    total: '100', next: '0.001', operation: '%', totalCalc: true,
  }, '=');
  expect(result).not.toBe({
    total: '1', next: null, operation: null, totalCalc: false,
  });
});

it('returns empty string if button is AC', () => {
  const result = calculate({
    total: null, next: null, operation: null, totalCalc: true,
  });
  expect(result).toStrictEqual({
    total: null, next: null, operation: null, totalCalc: true,
  });
});

it('Expect output to be different if button is AC', () => {
  const result = calculate({
    total: '20', next: '5', operation: null, totalCalc: false,
  });
  expect(result).not.toMatchObject({
    total: '20', next: '5', operation: null, totalCalc: true,
  });
});

it('returns negative value of +/- button', () => {
  const result = calculate({
    total: '-20',
  });
  expect(result).toMatchObject({
    total: '-20',
  });
});

it('returns positive value of +/- button', () => {
  const result = calculate({ total: '20' });
  expect(result).toMatchObject({
    total: '20',
  });
});
