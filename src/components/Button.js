import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ name, clickHandler }) {
  return <button type="button" onClick={clickHandler}>{ name }</button>;
}

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  name: '',
  clickHandler: () => '',
};