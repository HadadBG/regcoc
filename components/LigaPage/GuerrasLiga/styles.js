import styled from 'styled-components'
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    width: 100%;
    height: 80%;
`
export const Div = styled.div`
    border:1px solid black;
    background-color:green;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    &>p{
        margin:0;
        margin-bottom: 0.5rem;
    }
`
export const Button = styled.button`
    margin: auto;

`
