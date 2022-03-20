import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavMenu from './NavMenu';

describe('<NavMenu />', () => {
  test('it should mount', () => {
    render(<NavMenu />);
    
    const navMenu = screen.getByTestId('NavMenu');

    expect(navMenu).toBeInTheDocument();
  });
});