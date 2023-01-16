import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Friend from './Friend';

describe('<Navbar />', () => {
  test('it should mount', () => {
    const element = render(<Friend />);

    expect(element).toMatchSnapshot();

  });
});