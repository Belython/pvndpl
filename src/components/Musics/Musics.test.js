import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Musics from './Musics';

describe('<Musics />', () => {
  test('it should mount', () => {
    render(<Musics />);
    
    const musics = screen.getByTestId('Musics');

    expect(musics).toBeInTheDocument();
  });
});