import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Title } from './Title';

describe('<Title />', () => {
  test('it should mount', () => {
    render(<Title>Texto de exemplo</Title>);
    
    const titleComp = screen.getByTestId('Text');

    expect(titleComp).not.toBeNull;
  });
});