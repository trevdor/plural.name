import { expect } from 'chai';
import React from 'react';
import { Main, SingularNameInput, PluralizedNameOutput } from '../../src/components';
import ReactTestUtils from 'react-addons-test-utils';

describe('Main component', () => {
  let component;
  let singularNameInput;
  let pluralizedNameOutput;

  beforeEach(() => {
    component = ReactTestUtils.renderIntoDocument(<Main />);
    singularNameInput = ReactTestUtils.findRenderedComponentWithType(component, SingularNameInput);
    pluralizedNameOutput = ReactTestUtils.findRenderedComponentWithType(component, PluralizedNameOutput);
  });

  it('renders a text input', () => {
    expect(singularNameInput).to.exist;
  });

  it('renders a heading output', () => {
    expect(pluralizedNameOutput).to.exist;
  });
});
