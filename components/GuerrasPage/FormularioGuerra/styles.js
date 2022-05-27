import styled from 'styled-components'
export const Div = styled.div`
  
    display: flex;
    flex-direction:column;
`
export const Row = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
`
export const Input = styled.input`
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    height: 10%;
    width: 100%;
    gap:1rem;
    margin-bottom:0.5rem;
`
export const Label = styled.label`
    text-align:center;
`
