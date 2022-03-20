import styled from "styled-components"
import { TextProps } from './Text'

const StyledText = styled.p<TextProps>`
  color: ${({ theme, color = 'fg' }) => theme.colors[color]};
  font-family: ${({ theme, font = 'body' }) => theme.fonts.types[font]};
  font-weight: ${({ weight = 'normal'}) => weight};
  font-size: ${({ theme, size = 'default' }) => theme.functions.toRem(theme.fonts.sizes[size])};
  line-height: 1.2;
  margin: 0;
`

export { StyledText }
