import React from 'react';

class SingularNameInput extends React.Component {

  render() {
    const inputProps = {
      id: 'name',
      onChange: this.props.onChange,
      placeholder: this.props.placeholder,
      type: 'text'
    };

    return (
      <input { ...inputProps } ref={(c) => this._input = c} />
    );
  }

  componentDidMount() {
    this._input.focus();
  }
}

SingularNameInput.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string.isRequired
};

export default SingularNameInput;
