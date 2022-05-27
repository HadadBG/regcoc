import {
  Flex, Miembros, AgregarJugador, Label,
  Input, Boton, BotonContainer, Div,
  NoMiembros, Lista, Li,
  JugadorNombre, PuntosDiv, Datos
} from './styles'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Downshift from '@components/Downshift'

const Jugadores = ({ datos = {} }) => {
  const router = useRouter()
  const [jugadores, setJugadores] = useState([])
  const [totalPuntos, setTotalPuntos] = useState(0)
  const keyEventListener = (e) => {
    const buttonAddJugador = document.querySelector('#addJugador')
    const inputNombre = document.querySelector('#nombre_jugador')
    if (e.key === 'Tab') {
      if (document.activeElement === buttonAddJugador) {
        e.preventDefault()
        inputNombre.focus()
      }
    }
  }
  useEffect(() => {
    if (datos.jugadores) {
      setJugadores(datos.jugadores)
    }
    setTotalPuntos(datos.puntos)
    document.addEventListener('keydown', keyEventListener)
    return () => {
      document.removeEventListener('keydown', keyEventListener)
    }
  }, [])
  const addJugador = async () => {
    const nombreInput = document.querySelector('#nombre_jugador')
    const puntosInput = document.querySelector('#puntos')
    setTotalPuntos(totalPuntos + parseInt(puntosInput.value))
    await setJugadores((prevJugadores) => {
      return [
        ...prevJugadores,
        {
          nombre: nombreInput.value,
          puntos: parseInt(puntosInput.value),
          posicion: jugadores.length + 1
        }
      ]
    })
    nombreInput.value = null
    puntosInput.value = null
  }
  const guardarJuego = async () => {
    const { id } = router.query
    const mes = document.querySelector('#mes').value
    const año = parseInt(document.querySelector('#año').value)
    const maxPuntos = parseInt(document.querySelector('#max_puntos').value)
    const noMiembrosClan = parseInt(document.querySelector('#no_miembros_clan').value)
    let res
    const variables = {
      juego: {
        _id: id,
        mes: mes,
        anio: año,
        max_puntos: maxPuntos,
        puntos_conseguidos: totalPuntos,
        jugadores: jugadores,
        no_participantes: jugadores.length,
        no_miembros_clan: noMiembrosClan
      }
    }
    console.log(JSON.stringify(variables))
    try {
      res = await axios.post('/api', {
        query: 'mutation($juego:JuegoInput!){updateJuego(juego:$juego)}',
        variables: variables
      })
    } catch (e) {
      res = e
      console.log(res)
    }
    router.back()
  }
  return (
    <>
      <Flex>
        <Miembros>
          <NoMiembros>{jugadores.length} participantes / {totalPuntos} puntos</NoMiembros>
          <Lista>
            {jugadores.map(jugador => {
              return (
                <Li key={jugador.nombre}>
                  <JugadorNombre>{jugador.nombre}</JugadorNombre>
                  <PuntosDiv>
                    <Datos>
                      <div><p>{jugador.puntos} puntos</p></div>
                      <div><p>{jugador.posicion}.º</p></div>
                    </Datos>
                  </PuntosDiv>
                </Li>
              )
            })}
          </Lista>
        </Miembros>
        <AgregarJugador>
          <Div>
            {/* <Label htmlFor='nombre'>Nombre:</Label> */}
            {/* <Input id='nombre_jugador' name='nombre' type='text' /> */}
            <Downshift items={datos.miembros.map((dato) => dato._id)} />
          </Div>
          <Div>
            <Label htmlFor='puntos'>Puntos:</Label>
            <Input id='puntos' name='puntos' type='number' />
          </Div>
          <BotonContainer>
            <Boton onClick={addJugador} id='addJugador'>Agregar Jugador</Boton>
            <Boton onClick={guardarJuego}>Guardar Juego</Boton>
          </BotonContainer>
        </AgregarJugador>
      </Flex>
    </>
  )
}
export default Jugadores
