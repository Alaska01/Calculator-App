import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ result, next }) {
  return (
    <div className="display">
      <h2>{ next || result || '0' }</h2>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
  next: null,
};

