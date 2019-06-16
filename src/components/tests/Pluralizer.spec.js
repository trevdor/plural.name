import React from 'react';
import Pluralizer from '../Pluralizer';
import {
  render,
  fireEvent,
  getByPlaceholderText,
  getByText,
  queryByText
} from '@testing-library/react';

function pluralizeSurname(name) {
  const body = document.body;
  const inputField = getByPlaceholderText(body, 'Family Name');

  fireEvent.change(inputField, { target: { value: name } });

  return getByText(body, /The plural is/).textContent;
}

function renderApp() {
  render(<Pluralizer />);
}

describe('PluralizedNameOutput', () => {
  beforeEach(() => {
    renderApp();
  });

  describe('when empty', () => {
    it('renders no text', () => {
      const body = document.body;

      expect(queryByText(body, /The plural is/)).not.toBeInTheDocument();
    });
  });

  describe('pluralization', () => {
    let plural;

    it('handles Farlow', () => {
      plural = pluralizeSurname('Farlow');
      expect(plural).toMatch(/Farlows/);
    });

    it('handles Tubbs', () => {
      plural = pluralizeSurname('Tubbs');
      expect(plural).toMatch(/Tubbses/);
    });

    it('handles Murphy', () => {
      plural = pluralizeSurname('Murphy');
      expect(plural).toMatch(/Murphys/);
    });

    it('handles Simmons', () => {
      plural = pluralizeSurname('Simmons');
      expect(plural).toMatch(/Simmonses/);
    });

    it('handles Alvarez', () => {
      plural = pluralizeSurname('Alvarez');
      expect(plural).toMatch(/Alvarezes/);
    });

    it('handles Ash', () => {
      plural = pluralizeSurname('Ash');
      expect(plural).toMatch(/Ashes/);
    });
  });
});
