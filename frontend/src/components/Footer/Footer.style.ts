import styled from "styled-components"

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  width: 100%;
`

export { StyledFooter }
