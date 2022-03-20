import React, { ReactNode } from 'react';
import { StyledTitle } from './Title.style';

type TitleColor = 'bg' | 'fg' | 'primary' | 'secondary'
type TitleSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl' | 'xxl' | 'xxxl'
type TitleLevel = 'h2' | 'h3' | 'h4' | 'h5'

export interface TitleProps {
  children: ReactNode
  color?: TitleColor
  size?: TitleSize
  as?: TitleLevel
}

const Title = ({ children, color, size, as = 'h2' }: TitleProps) => (
  <StyledTitle color={color} size={size} as={as}>
    {children}
  </StyledTitle>
);

export { Title };
