import { createGlobalStyle } from "styled-components"
import { ThemeType } from "./theme"

interface Props {
  theme: ThemeType
}

const GlobalStyle = createGlobalStyle<Props>`
  body {
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.fg};
    font-family: ${({ theme }) => theme.fonts.types.body};
    font-size: ${({ theme }) => theme.functions.toRem(16)};
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6, .navLink {
    font-family: ${({ theme }) => theme.fonts.types.title};
    margin: 0;
  }
  a {
    text-decoration: none;
  }
`

export default GlobalStyle
