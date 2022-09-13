import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Photos from './Photos';

describe('<Photos />', () => {
  test('it should mount', () => {
    render(<Photos />);
    
    const photos = screen.getByTestId('Photos');

    expect(photos).toBeInTheDocument();
  });
});