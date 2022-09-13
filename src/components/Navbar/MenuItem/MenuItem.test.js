import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MenuItem from './MenuItem';

describe('<MenuItem />', () => {
  test('it should mount', () => {
    render(<MenuItem />);
    
    const menuItem = screen.getByTestId('MenuItem');

    expect(menuItem).toBeInTheDocument();
  });
});