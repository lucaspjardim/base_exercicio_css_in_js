import styled from 'styled-components'

export const Header = styled.header`
  background-color: ${(props) => props.theme.corSecundaria};
  color: ${(props) => props.theme.corPrincipal};
  text-align: center;
  padding: 24px 0;
`

export const Titulo = styled.h1`
  font-size: 32px;
`
