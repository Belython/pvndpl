import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Group from './Group';

describe('<Navbar />', () => {
  test('it should mount', () => {
    const element = render(<Group />);

    expect(element).toMatchSnapshot();

  });
});