import styled from 'styled-components'
export const Div = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-image: url("/images/fondo.jpg");
  justify-content: center;
  background-size: cover;
  background-position:center;
  background-repeat: no-repeat;
  &:after {
    background-color: white;
  }
`
