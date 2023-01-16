import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SocialNetwork from './SocialNetwork';

describe('<SocialNetwork />', () => {
  test('it should mount', () => {
    const element = render(<SocialNetwork />);

    expect(element).toMatchSnapshot();

  });
});