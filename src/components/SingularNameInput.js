import React from 'react';
import PropTypes from 'prop-types';

class SingularNameInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const inputProps = {
      id: 'name',
      onChange: this.props.onChange,
      placeholder: this.props.placeholder,
      type: 'text'
    };

    return <input {...inputProps} ref={'theInput'} />;
  }

  componentDidMount() {
    this.refs.theInput.focus();
  }
}

SingularNameInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default SingularNameInput;
