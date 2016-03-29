import { expect } from 'chai';
import React from 'react';
import { PluralizedNameOutput } from '../../src/components';
import ReactTestUtils from 'react-addons-test-utils';
import sinon, { stub } from 'sinon';

function shallowRenderPluralized(name) {
  const shallowRenderer = ReactTestUtils.createRenderer();
  shallowRenderer.render(<PluralizedNameOutput name={ name } />);
  return shallowRenderer.getRenderOutput();
}

function renderPluralized(name) {
  const component = ReactTestUtils.renderIntoDocument(<PluralizedNameOutput name={ name } />);
  return ReactTestUtils.findRenderedDOMComponentWithClass(component, 'pluralized');
}

describe('PluralizedNameOutput', () => {
  let plural;

  describe('when empty', () => {
    it('renders an empty div', () => {
      const output = shallowRenderPluralized('');

      expect(output.type).to.equal('div');
      expect(output.props.name).to.be.undefined;
    });
  });

  describe('pluralization', () => {
    it('handles Farlow', () => {
      plural = renderPluralized('Farlow');
      expect(plural.innerHTML).to.equal('Farlows');
    });

    it('handles Tubbs', () => {
      plural = renderPluralized('Tubbs');
      expect(plural.innerHTML).to.equal('Tubbses');
    });

    it('handles Murphy', () => {
      plural = renderPluralized('Murphy');
      expect(plural.innerHTML).to.equal('Murphys');
    });

    it('handles Simmons', () => {
      plural = renderPluralized('Simmons');
      expect(plural.innerHTML).to.equal('Simmonses');
    });

    it('handles Alvarez', () => {
      plural = renderPluralized('Alvarez');
      expect(plural.innerHTML).to.equal('Alvarezes');
    });

    it('handles Ash', () => {
      plural = renderPluralized('Ash');
      expect(plural.innerHTML).to.equal('Ashes');
    });
  });
});
