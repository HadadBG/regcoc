import styled from 'styled-components'
export const Div = styled.div`
    padding:0.4rem;
    height:100%;
    width:35vw;
    display: flex;
    flex-direction:column;
    gap:20%;
    justify-content:center;
`
export const AñoMes = styled.div`
  display: flex;
  justify-content:space-between;
`
export const InputAño = styled.input`
  width:4rem;
  background-color:transparent;
  border: 1px solid white;
  text-align: center;
  &::-webkit-outer-spin-button,
  & ::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
`
export const SelectMes = styled.select`
  width:7rem;
  background-color:transparent;
  border: 1px solid white;
  text-align:center;
  
`
export const Label = styled.label`
  margin-left:0.4rem;
`
