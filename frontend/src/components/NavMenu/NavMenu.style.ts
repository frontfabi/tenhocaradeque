import styled, { keyframes } from "styled-components"

const glitchAnimation = keyframes`
  0% {
		transform: translate(0)
	}
	20% {
		transform: translate(-2px, 0)
	}
	40% {
		transform: translate(0, -2px)
	}
	to {
		transform: translate(0)
	}
`
const StyledNav = styled.nav`
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme, size = "default" }) =>
    theme.functions.toRem(theme.fonts.sizes[size])};
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.bg};

  .navMenuList {
    display: flex;
    list-style: none;
    gap: 20px;

    li {
      a {
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.primary};
        position: relative;

        text-decoration: none;
        transform: translate(-10%, -15%);
        margin: 0;

        &::before,
        &::after {
          display: block;
          content: attr(data-text);
          text-transform: uppercase;
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          opacity: 0;
        }
        &::after {
          color: ${({ theme }) => theme.colors.glitch1};
          z-index: -2;
        }
        &::before {
          color: ${({ theme }) => theme.colors.glitch2};
          z-index: -1;
        }


        &:hover {
          color: ${({ theme }) => theme.colors.secondary};

          &:before, &::after {
            opacity: .8;
          }
          &::before {
            animation: ${glitchAnimation} 0.3s
              cubic-bezier(0.25, 0.10, 0.20, 0.15) both 5;
          }
          &::after {
            animation: ${glitchAnimation} 0.3s
              cubic-bezier(0.15, 0.20, 0.10, 0.25) reverse both 5;
          }
        }
      }
    }
  }
`

export { StyledNav }
