import React, { useState } from 'react';
import SingularNameInput from './SingularNameInput';
import PluralizedNameOutput from './PluralizedNameOutput';

import '../styles/milligram.min.css';

function Pluralizer() {
  const placeHolderText = 'Family Name';
  const [name, setName] = useState(placeHolderText);

  const onNameChange = event => {
    const trimmedName = event.target.value.trim();
    const newName = trimmedName.replace(/[^a-zA-Z\s']/g, '');
    setName(newName);
  };

  return (
    <div
      className="column column-50 column-offset-25"
      style={{
        height: window.innerHeight / 2
      }}
    >
      <h1>Pluralize a Family Name</h1>
      <SingularNameInput
        onChange={onNameChange}
        placeholder={placeHolderText}
      />
      <PluralizedNameOutput name={name === placeHolderText ? '' : name} />
    </div>
  );
}

export default Pluralizer;
