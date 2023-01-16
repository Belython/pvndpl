import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Posts from './Posts';

describe('<Posts />', () => {
  test('it should mount', () => {
    const element = render(<Posts />);

    expect(element).toMatchSnapshot();

  });
});