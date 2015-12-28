import { expect } from 'chai';
import React from 'react';
import { PluralizedNameOutput } from '../../src/components';
import ReactTestUtils from 'react-addons-test-utils';
import sinon, { stub } from 'sinon';

function renderHeading(name) {
  const component = ReactTestUtils.renderIntoDocument(<PluralizedNameOutput name={ name } />);
  return ReactTestUtils.findRenderedDOMComponentWithTag(component, 'h1');
}

describe('PluralizedNameOutput component', () => {
  let heading;

  it('renders an h1', () => {
    heading = renderHeading('Singular');
    expect(heading).to.exist;
  });

  describe('pluralization', () => {
    it('handles Farlow', () => {
      heading = renderHeading('Farlow');
      expect(heading.innerHTML).to.equal('Farlows');
    });

    it('handles Tubbs', () => {
      heading = renderHeading('Tubbs');
      expect(heading.innerHTML).to.equal('Tubbses');
    });

    it('handles Murphy', () => {
      heading = renderHeading('Murphy');
      expect(heading.innerHTML).to.equal('Murphys');
    });

    it('handles Simmons', () => {
      heading = renderHeading('Simmons');
      expect(heading.innerHTML).to.equal('Simmonses');
    });

    it('handles Alvarez', () => {
      heading = renderHeading('Alvarez');
      expect(heading.innerHTML).to.equal('Alvarezes');
    });

    it('handles Ash', () => {
      heading = renderHeading('Ash');
      expect(heading.innerHTML).to.equal('Ashes');
    });
  });
});
