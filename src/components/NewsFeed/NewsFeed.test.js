import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewsFeed from './NewsFeed';

describe('<NewsFeed />', () => {
  test('it should mount', () => {
    const element = render(<NewsFeed />);

    expect(element).toMatchSnapshot();

  });
});