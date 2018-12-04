import React from 'react';
import PropTypes from 'prop-types';

class PluralizedNameOutput extends React.PureComponent {
  constructor(props) {
    super(props);
    // prettier-ignore
    this.addS = [
      'a', 'b', 'c', 'd', 'e', 
      'f', 'g', 'h', 'i', 'j', 
      'k', 'l', 'm', 'n', 'o', 
      'p', 'q', 'r', 't', 'u', 
      'v', 'w', 'y'
    ];
    this.addEs = ['s', 'x', 'z', 'ch', 'sh'];
  }

  render() {
    const { name } = this.props;
    if (!name) {
      return (
        <div id="pluralExample">
          <h3 id="output" />
        </div>
      );
    }

    const pluralName = this._pluralize(name);

    return (
      <div id="pluralExample">
        <h3 id="output">
          The plural is <span className="pluralized">{pluralName}</span>
        </h3>
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

    if (
      this.addEs.includes(lastTwoLetters) ||
      this.addEs.includes(lastLetter)
    ) {
      pluralized = trimmedName + 'es';
    } else if (this.addS.includes(lastLetter)) {
      pluralized = trimmedName + 's';
    }

    return pluralized;
  }
}

PluralizedNameOutput.propTypes = {
  name: PropTypes.string.isRequired
};

export default PluralizedNameOutput;
