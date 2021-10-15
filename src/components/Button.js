import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ name }) {
  return <button type="button">{ name }</button>;
}

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: '',
};
