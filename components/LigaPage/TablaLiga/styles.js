import styled from 'styled-components'
export const Table = styled.table`
    width: 100%;
`
export const Tr = styled.tr`

`
export const Td = styled.td`
    width: 20%;
    padding: 0.5rem 0;
    & > p{
        color:white;
        margin:0;
    }
`
export const AccionTamaño = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    &>p{
        color: white;
        margin: 0;
    }
`
export const P = styled.p`
    text-align:center;
`
