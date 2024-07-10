import React from 'react';
import { render } from '@testing-library/react';
import Total from '../Total';

const selectedItems = {
  Person1: [
    { id: 1, title: 'Item 1', price: 10 },
    { id: 2, title: 'Item 2', price: 20 },
  ],
  Person2: [
    { id: 3, title: 'Item 3', price: 30 },
    { id: 4, title: 'Item 4', price: 40 },
  ],
};

test('matches snapshot for Person1', () => {
  const { asFragment } = render(<Total selectedItems={selectedItems} selectedPerson="Person1" />);
  expect(asFragment()).toMatchSnapshot();
});

test('matches snapshot for Person2', () => {
  const { asFragment } = render(<Total selectedItems={selectedItems} selectedPerson="Person2" />);
  expect(asFragment()).toMatchSnapshot();
});
