import { expect } from 'chai';
import React from 'react';
import { SingularNameInput } from '../../src/components';
import ReactTestUtils from 'react-addons-test-utils';
import sinon, { stub } from 'sinon';

describe('SingularNameInput component', () => {
  const inputProps = {
    onChange: stub(),
    placeholder: 'Hold My Place, Bro'
  };
  let component;
  let input;

  beforeEach(() => {
    component = ReactTestUtils.renderIntoDocument(<SingularNameInput { ...inputProps } />);
    input = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'input');
  });

  afterEach(() => {
    inputProps.onChange.reset();
  });

  it('renders a text input', () => {
    expect(input).to.exist;
  });

  it('fires the provided onChange', () => {
    ReactTestUtils.Simulate.change(input);
    sinon.assert.calledOnce(inputProps.onChange);
  });
});
