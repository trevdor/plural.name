import _ from 'lodash';
import React from 'react';

class PluralizedNameOutput extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.addS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 't', 'u', 'v', 'w', 'y'];
    this.addEs = ['s', 'x', 'z', 'ch', 'sh'];
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.name !== nextProps.name;
  }

  render() {
    if (!this.props.name) {
      return <div id="pluralExample" />;
    }

    return (
      <div id="pluralExample">
        <h1 id="output">The plural is <span className="pluralized">{ this._pluralize(this.props.name) }</span></h1>
      </div>
    );
  }

  _pluralize(name) {
    var trimmedName = name.trim();
    var pluralized = trimmedName;

    if (trimmedName.length < 2) {
      return pluralized;
    }

    var lastLetter = trimmedName.charAt(trimmedName.length - 1);
    var lastTwoLetters = trimmedName.substring(trimmedName.length - 2);

    if (_.includes(this.addEs, lastTwoLetters) || _.includes(this.addEs, lastLetter)) {
      pluralized = trimmedName + 'es';
    }
    else if (_.includes(this.addS, lastLetter)) {
      pluralized = trimmedName + 's';
    }

    return pluralized;
  }
}

PluralizedNameOutput.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default PluralizedNameOutput;
