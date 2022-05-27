import styled from 'styled-components'
export const Flex = styled.div`
    display: flex;
    height: 90%;
    
`

export const Miembros = styled.div`
    width:70%

`
export const AgregarJugador = styled.div`
    width:30%;
    padding: 3rem 1rem 4rem 3rem;
    display: flex;
    flex-direction:column;
    justify-content:space-around;
`
export const Label = styled.label`
    display: block;
`

export const Input = styled.input`
    display: block;
    width: 100%;
`
export const Boton = styled.button`
`
export const BotonContainer = styled.div`
    display:  flex;
    justify-content:space-between;
`
export const Div = styled.div`

`
export const NoMiembros = styled.h2`
    text-align:center;
    margin: 1rem 0 0 0;
`
export const Lista = styled.ul`
    border: 1px solid gray;
    width: 100%;
    height: 80%;
    list-style:none;
    padding: 2rem;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns:repeat(2, 1fr);
    grid-template-rows:repeat(10 , 1fr);
    overflow-y:auto;
    &::-webkit-scrollbar {
  display: none;
}
`
export const Li = styled.li`
    display:flex;
    height:100%;
    border-bottom:1px solid gray ;
`
export const JugadorNombre = styled.p`
    width: 30%;
    margin: auto;
    text-align:center;
`
export const AtaquesDiv = styled.div`
    width: 70%;
`
export const AtaqueDiv = styled.div`
    display: flex;
    height: 100%;
    justify-content:center;
    height: calc(100% /  ${(props) => props.NoJugadores} );
`
export const PAtaque = styled.p`
    margin-right:1rem;
`
export const Datos = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height: 100%;
    &>div>p{
        margin:0;
    }
`
