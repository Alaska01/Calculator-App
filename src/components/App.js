import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      totalCalc: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    const {
      total, next, operation, totalCalc,
    } = this.state;
    const result = calculate({
      total, next, operation, totalCalc,
    }, buttonName);
    this.setState({
      total: result.total,
      next: result.next,
      operation: result.operation,
      totalCalc: result.totalCalc,
    });
  }

  render() {
    const { total, next } = this.state;
    return (
      <div>
        <Display result={total} next={next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
