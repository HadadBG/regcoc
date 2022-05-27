import React from 'react'
import { Flex, Button } from './styles'
const BotonesNavegacion = ({ handleChangeSeccion, seccionSeleccionada }) => (
  <Flex>
    <Button id='botonGeneral' onClick={handleChangeSeccion} active={seccionSeleccionada === 'General'}>General</Button>
    <Button id='botonJugadores' onClick={handleChangeSeccion} active={seccionSeleccionada === 'Jugadores'}>Jugadores</Button>
    <Button id='botonGuerras' onClick={handleChangeSeccion} active={seccionSeleccionada === 'Guerras'}>Guerras</Button>
    <Button id='botonLigas' onClick={handleChangeSeccion} active={seccionSeleccionada === 'Ligas'}>Ligas</Button>
    <Button id='botonJuegos' onClick={handleChangeSeccion} active={seccionSeleccionada === 'Juegos del Clan'}>Juegos del Clan</Button>
  </Flex>
)

export default BotonesNavegacion
