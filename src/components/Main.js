import _ from 'lodash';
import React from 'react';
import { SingularNameInput, PluralizedNameOutput } from '.';

require('../styles/main.css');
require('../styles/milligram.min.css');

class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.placeHolderText = 'Family Name';
    this.state = {
      name: this.placeHolderText
    };

    this._onNameChange = this._onNameChange.bind(this);
  }

  render() {
    const name = this.state.name === this.placeHolderText ? '' : this.state.name;
    return (
      <div class="column column-50 column-offset-25">
        <h1>Pluralize a Family Name</h1>
        <SingularNameInput onChange={ this._onNameChange } placeholder={ this.placeHolderText } />
        <PluralizedNameOutput name={ name } />
      </div>
    );
  }

  _onNameChange(event) {
    const trimmedName = event.target.value.trim();
    const newName = trimmedName.replace(/[^a-zA-Z\s']/g, '');
    this.setState({ name: newName });
  }
}

export default Main;
