import React from 'react';
import PropTypes from 'prop-types';

// prettier-ignore
const addS = [
  'a', 'b', 'c', 'd', 'e', 
  'f', 'g', 'h', 'i', 'j', 
  'k', 'l', 'm', 'n', 'o', 
  'p', 'q', 'r', 't', 'u', 
  'v', 'w', 'y'
];
const addEs = ['s', 'x', 'z', 'ch', 'sh'];

function pluralize(name) {
  var trimmedName = name.trim();
  var pluralized = trimmedName;

  if (trimmedName.length < 2) {
    return pluralized;
  }

  var lastLetter = trimmedName.charAt(trimmedName.length - 1);
  var lastTwoLetters = trimmedName.substring(trimmedName.length - 2);

  if (addEs.includes(lastTwoLetters) || addEs.includes(lastLetter)) {
    pluralized = trimmedName + 'es';
  } else if (addS.includes(lastLetter)) {
    pluralized = trimmedName + 's';
  }

  return pluralized;
}

function PluralizedNameOutput({ name }) {
  if (!name) {
    return <div id="pluralExample">{/* <h3 id="output" /> */}</div>;
  }

  const pluralName = pluralize(name);

  return (
    <div id="pluralExample">
      <h3 id="output">
        The plural is <span className="pluralized">{pluralName}</span>
      </h3>
    </div>
  );
}

PluralizedNameOutput.propTypes = {
  name: PropTypes.string.isRequired
};

export default PluralizedNameOutput;
