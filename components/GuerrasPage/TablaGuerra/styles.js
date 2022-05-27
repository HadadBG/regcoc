import styled from 'styled-components'
export const Table = styled.table`
   border-spacing:0;
   width:100%;
   border-bottom: 1px solid white;
   
`
export const Tr = styled.tr`
   
  
`
export const Tbody = styled.tbody`
    border-spacing:0;
  
`
export const Td = styled.td`
   
    padding: 0;
    border: 1px solid white;
    & > div > p{
        color:white;
        margin:0 auto;
    }
    & > div{
        min-height: 6rem;
        display:flex;
        justify-content:space-evenly;
        align-items:center;
        flex-direction:column;

        
    }
`

export const P = styled.p`
    text-align:center;
`
export const Button = styled.button`
    
 
`
export const Div = styled.div`
    height:80%;
    overflow-y:auto;
    &::-webkit-scrollbar {
  display: none;
}
  
`
