import styled from "styled-components"
import { TitleProps } from './Title'

const StyledTitle = styled.h2<TitleProps>`
  color: ${({ theme, color = 'fg'}) => theme.colors[color]};
  font-family: ${({ theme }) => theme.fonts.types.title};
  font-size: ${({ theme, size = 'lg' }) => theme.functions.toRem(theme.fonts.sizes[size])};
`

export { StyledTitle }
