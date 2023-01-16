import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigation from './Navigation';

describe('<Navigation />', () => {
  test('it should mount', () => {
    const element = render(<Navigation />);

    expect(Navigation).toMatchSnapshot();

  });
});