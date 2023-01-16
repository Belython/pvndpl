import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserInfo from './UserInfo';

describe('<UserInfo />', () => {
  test('it should mount', () => {
    const element = render(<UserInfo />);

    expect(element).toMatchSnapshot();

  });
});