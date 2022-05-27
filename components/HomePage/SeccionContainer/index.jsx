import React from 'react'
import { Div } from './styles'
import SeccionGeneral from '../Secciones/SeccionGeneral'
import SeccionJugadores from '../Secciones/SeccionJugadores'
import SeccionJuegos from '../Secciones/SeccionJuegos'
import SeccionGuerras from '../Secciones/SeccionGuerras'
import SeccionLigas from '../Secciones/SeccionLigas'
const Seccion = ({ seccionSeleccionada }) => {
  const setSeccion = () => {
    switch (seccionSeleccionada) {
      case 'General':
        return <SeccionGeneral />
      case 'Jugadores':
        return <SeccionJugadores />
      case 'Guerras':
        return <SeccionGuerras />
      case 'Ligas':
        return <SeccionLigas />
      case 'Juegos del Clan':
        return <SeccionJuegos />
      default:
        return <></>
    }
  }
  return (
    <Div>
      {setSeccion()}
    </Div>
  )
}
export default Seccion
