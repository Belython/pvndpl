import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Musics from './Musics';

describe('<Musics />', () => {
  test('it should mount', () => {
    const element = render(<Musics />);

    expect(element).toMatchSnapshot();

  });
});