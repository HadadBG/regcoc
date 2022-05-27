import {
  Flex, Miembros, AgregarJugador, Label,
  Input, Boton, BotonContainer, Div,
  NoMiembros, Lista, Li, AtaquesDiv,
  JugadorNombre, AtaqueDiv, Datos, PAtaque
} from './styles'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Downshift from '@components/Downshift'

const Jugadores = ({ datos = {}, isLiga = false }) => {
  let ataquesDiv
  const router = useRouter()
  const [jugadores, setJugadores] = useState([])
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
    document.addEventListener('keydown', keyEventListener)
    return () => {
      document.removeEventListener('keydown', keyEventListener)
    }
  }, [])
  const addJugador = async () => {
    let ataques = []
    const nombreInput = document.querySelector('#nombre_jugador')
    if (isLiga) {
      const estrellasInput = document.querySelector('#estrellas_jugador')
      const porcentajeInput = document.querySelector('#porcentaje_jugador')
      ataques = [{
        estrellas: parseInt(estrellasInput.value),
        porcentaje: parseFloat(porcentajeInput.value)
      }]
      estrellasInput.value = null
      porcentajeInput.value = null
    } else {
      const nombreFieldsets = ['fs_ataque1', 'fs_ataque2']
      nombreFieldsets.forEach((fieldset) => {
        const fs = document.querySelector('#' + fieldset)
        ataques.push({
          estrellas: parseInt(fs.children[1].children[1].value),
          porcentaje: parseInt(fs.children[2].children[1].value)
        })
        fs.children[1].children[1].value = null
        fs.children[2].children[1].value = null
      })
    }
    await setJugadores((prevJugadores) => {
      return [
        ...prevJugadores,
        {
          nombre: nombreInput.value,
          ataques: ataques
        }
      ]
    })
    nombreInput.value = null
  }
  const guardarGuerra = async () => {
    const { id } = router.query
    const estrellasGanadas = parseInt(document.querySelector('#estrellas_ganadas').value)
    const destruccionRealizada = parseFloat(document.querySelector('#destruccion_realizada').value)
    const ganada = document.querySelector('#rb_ganada').checked
    let res
    const variables = {
      guerra: {
        _id: id,
        ganada: ganada,
        jugadores: jugadores,
        total_estrellas: parseFloat(jugadores.length * 3),
        estrellas_ganadas: estrellasGanadas,
        total_destruccion_porcentaje: destruccionRealizada
      }
    }
    try {
      res = await axios.post('/api', {
        query: 'mutation($guerra:GuerraInput!){updateGuerra(guerra:$guerra)}',
        variables: variables
      })
    } catch (e) {
      res = e
      console.log(res)
    }
    router.back()
  }
  if (isLiga) {
    ataquesDiv = (
      <>
        <Div>
          <Label htmlFor='estrellas'>Estrellas:</Label>
          <Input id='estrellas_jugador' name='estrellas' type='number' />
        </Div>
        <Div>
          <Label htmlFor='porcentaje'>Porcentaje:</Label>
          <Input id='porcentaje_jugador' name='porcentaje_jugador' type='number' />
        </Div>
      </>
    )
  } else {
    ataquesDiv = (
      <>
        <fieldset id='fs_ataque1'>
          <legend>Ataque 1</legend>
          <Div>
            <Label htmlFor='estrellas'>Estrellas:</Label>
            <Input name='estrellas' type='number' />
          </Div>
          <Div>
            <Label htmlFor='porcentaje'>Porcentaje:</Label>
            <Input name='porcentaje_jugador' type='number' />
          </Div>
        </fieldset>
        <fieldset id='fs_ataque2'>
          <legend>Ataque 2</legend>
          <Div>
            <Label htmlFor='estrellas'>Estrellas:</Label>
            <Input name='estrellas' type='number' />
          </Div>
          <Div>
            <Label htmlFor='porcentaje'>Porcentaje:</Label>
            <Input name='porcentaje_jugador' type='number' />
          </Div>
        </fieldset>
      </>
    )
  }
  return (
    <>
      <Flex>
        <Miembros>
          <NoMiembros>{jugadores.length} miembros</NoMiembros>
          <Lista>
            {jugadores.map(jugador => {
              return (
                <Li key={jugador.nombre}>
                  <JugadorNombre>{jugador.nombre}</JugadorNombre>
                  <AtaquesDiv>
                    {jugador.ataques.map((ataque, index) => {
                      return (
                        <AtaqueDiv NoJugadores={jugador.ataques.length} key={index}>
                          <PAtaque>Ataque {index + 1}:</PAtaque>
                          <Datos>
                            <div><p>{ataque.estrellas} estrellas</p></div>
                            <div><p>{ataque.porcentaje}%</p></div>
                          </Datos>
                        </AtaqueDiv>
                      )
                    })}
                  </AtaquesDiv>
                </Li>
              )
            })}
          </Lista>
        </Miembros>
        <AgregarJugador>
          <Div>
            {/* <Label htmlFor='nombre'>Nombre:</Label> */}
            {/* <Input id='nombre_jugador' name='nombre' type='text' /> */}
            <Downshift items={datos.miembros.map((dato) => dato._id)} label="Nombre"/>
          </Div>
          {ataquesDiv}
          <BotonContainer>
            <Boton onClick={addJugador} id='addJugador'>Agregar Jugador</Boton>
            <Boton onClick={guardarGuerra}>Guardar Guerra</Boton>
          </BotonContainer>
        </AgregarJugador>
      </Flex>
    </>
  )
}
export default Jugadores
