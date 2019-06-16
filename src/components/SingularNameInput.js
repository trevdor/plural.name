import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function SingularNameInput({ onChange, placeholder }) {
  const theInput = useRef(null);
  useEffect(() => {
    theInput.current.focus();
  });

  return (
    <input
      aria-label="pluralized name"
      id="name"
      onChange={onChange}
      placeholder={placeholder}
      type="text"
      ref={theInput}
    />
  );
}

SingularNameInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default SingularNameInput;
