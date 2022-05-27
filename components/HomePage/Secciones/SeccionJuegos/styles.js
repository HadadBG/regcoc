import styled from 'styled-components'
export const CheckBoxes = styled.div`
   display: flex;
   flex-direction:column;
   justify-content:center;
   gap:0.3rem;
`
export const Button = styled.button`
   
`
export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows:1fr 1fr;
    width: 100%;
    height: 83%;
    
    margin-top:1rem;
    gap:0.5rem;
`
export const GraficaContainer = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    justify-content:center;
    padding: 0 1rem;
    flex-direction:column;
    align-items:center;
    background-color:#C1C4B8;
    border: 1px solid gray;
    gap:1rem;
   &>h3{
       text-align:center;
       
   }
`
export const ButtonVer = styled.button`
    margin: auto;
   height:2.5rem;
   width: 10rem;
   
`
export const InputTamaño = styled.input`
  width:4rem;
  background-color:transparent;
  border: 1px solid white;
`
