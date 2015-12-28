import _ from 'lodash';
import React from 'react';
import { SingularNameInput, PluralizedNameOutput } from '.';

require('../styles/main.css');

class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.placeHolderText = 'Last Name';
    this.state = {
      name: this.placeHolderText
    };

    this._onNameChange = this._onNameChange.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Pluralize a Family Name</h1>
        <SingularNameInput onChange={ this._onNameChange } placeholder={ this.placeHolderText } />
        <PluralizedNameOutput name={ this.state.name } />
      </div>
    );
  }

  _onNameChange(event) {
    const newName = event.target.value.trim();
    this.setState({ name: newName });
  }
}

export default Main;
