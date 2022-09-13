import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderContent from './HeaderContent';

describe('<HeaderContent />', () => {
  test('it should mount', () => {
    render(<HeaderContent />);
    
    const headerContent = screen.getByTestId('HeaderContent');

    expect(headerContent).toBeInTheDocument();
  });
});