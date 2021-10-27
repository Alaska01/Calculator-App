import React, { useState } from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import NavBar from './NavBar';

const App = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
    totalCalc: true,
  });

  const handleClick = (buttonName) => {
    const {
      total, next, operation, totalCalc,
    } = state;
    const result = calculate({
      total, next, operation, totalCalc,
    }, buttonName);

    setState({
      total: result.total,
      next: result.next,
      operation: result.operation,
      totalCalc: result.totalCalc,
    });
  };

  const { total, next } = state;
  return (
    <div>
      <NavBar />
      <Display result={total} next={next} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
