import styled from "styled-components"
import { ButtonProps } from './Button'

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ theme, styleBtn }) => theme.colors[styleBtn === 'primary' ? 'primary' : 'bg']};
  border-radius: ${({ theme }) => theme.functions.toRem(theme.spacing.default)};
  border: none;
  cursor: pointer;
  outline: none;
  padding: ${({ theme }) => theme.functions.toRem(theme.spacing.default)} ${({ theme }) => theme.functions.toRem(theme.spacing.xl)};
  min-width: ${({ theme }) => theme.functions.toRem(220)};
  box-shadow: 0px 2px 4px rgba(0,0,0,.35);
  
  > * {
    text-transform: uppercase;
  }
`

export { StyledButton }

