import styled from 'styled-components'
export const Flex = styled.div`
    display: flex;
    justify-content:space-evenly;
    height:10%;
    padding-bottom:0.2rem;
   
`
export const JugadoresDiv = styled.div`
    width:17%;
    &>h1{
        font-size:1.38rem;
        margin-bottom:0.2rem;
    }
    display:flex;
    flex-direction:column;
    
`
export const OrdenDiv = styled.div`
    &>div{
        display:flex;
        justify-content:space-between;
        width:100%;
    }
    display:flex;
    align-items:center;
    justify-content:space-between;
    
    flex-direction:column;
`
export const FiltrosDiv = styled.div`
    width:38%;
    &>div{
        display:flex;
    
        width:100%;
    }
`
export const CheckBoxes = styled.div`
    margin-left:1rem;
    width:100%;
    &>div{
        white-space:nowrap;
    }
`
export const OtrosFiltros = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    
   
`
export const UltimaGuerra = styled.div`
    display:flex;
    flex-direction:column;
    align-item:end;
    &>label{
        white-space:nowrap;
    }
    &>select{
        margin-bottom:0.3rem;
    }
`
