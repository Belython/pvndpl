import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Link from './Link';

describe('<Link />', () => {
  test('it should mount', () => {
    const element = render(<Link />);

    expect(element).toMatchSnapshot();

  });
});