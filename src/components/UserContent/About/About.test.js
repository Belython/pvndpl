import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from './About';

describe('<Navbar />', () => {
  test('it should mount', () => {
    const about = render(<About />);

    expect(about).toMatchSnapshot();

  });
});