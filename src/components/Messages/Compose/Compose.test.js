import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Compose from './index';

describe('<Compose />', () => {
  test('it should mount', () => {
    const element = render(<Compose />);

    expect(element).toMatchSnapshot();

  });
});