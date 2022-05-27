import styled from 'styled-components'
export const Table = styled.table`
   border-spacing:0;
   width:100%;
   border: 1px solid white;
   padding:0.5rem 1rem;
   
`
export const Tr = styled.tr`
   
  
`
export const Tbody = styled.tbody`
    border-spacing:0;
  
`
export const Td = styled.td`
    border-bottom: 1px solid white;
    padding: 0;
    
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
    margin-top:1rem;
    height:85%;
    overflow-y:auto;
    &::-webkit-scrollbar {
  display: none;
}
  
`
