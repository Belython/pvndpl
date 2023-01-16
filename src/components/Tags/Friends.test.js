import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Friends from './Friends';

describe('<Friends />', () => {
  test('it should mount', () => {
    const element = render(<Friends />);

    expect(element).toMatchSnapshot();

  });
});