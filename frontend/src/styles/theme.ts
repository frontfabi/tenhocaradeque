const defaultTheme = {
  colors: {
    bg: "#ffffff",
    fg: "#5F5F5F",
    primary: "#49adaa",
    secondary: "#a48bc5",
    glitch1: "#cc0f39",
    glitch2: "#0ffbf9",
  },
  functions: {
    toRem: (px: number) => `${px / 16}rem`,
  },
  spacing: {
    xs: 4,
    sm: 8,
    default: 12,
    lg: 16,
    xl: 24,
  },
  fonts: {
    types: {
      title: "Orbitron",
      body: "Rubik",
    },
    sizes: {
      xs: 10,
      sm: 14,
      default: 16,
      lg: 24,
      xl: 28,
      xxl: 32,
      xxxl: 40,
    },
  },
}

export type ThemeType = typeof defaultTheme
export default defaultTheme
