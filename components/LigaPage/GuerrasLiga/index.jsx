import { Grid, Div, Button } from './styles'
import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const GuerrasLiga = ({ datos = [] }) => {
  const router = useRouter()

  const guardarLiga = async () => {
    const { id } = router.query
    const mes = document.querySelector('#selector_mes').value
    const año = parseInt(document.querySelector('#input_año').value)
    const puesto = parseInt(document.querySelector('#input_puesto').value)
    const liga = document.querySelector('#input_liga').value
    const estrellas = parseInt(document.querySelector('#input_estrellas').value)
    const destruccion = parseFloat(document.querySelector('#input_destruccion').value)
    const tamaño = parseInt(document.querySelector('#input_tamaño').value)
    const terminada = !datos.some((dato) => dato.ganada)
    const variables = {
      liga: {
        _id: id,
        mes: mes,
        total_estrellas: parseInt(tamaño * datos.length * 3),
        estrellas_ganadas: estrellas,
        total_destruccion: parseInt(tamaño * 100 * datos.length),
        destruccion_realizada: destruccion,
        liga: liga,
        terminada: terminada,
        tamano: tamaño,
        anio: año,
        puesto: puesto
      }
    }
    let res
    try {
      res = await axios.post('/api', {
        query: 'mutation($liga:LigaInput!){updateLiga(liga:$liga)}',
        variables: variables
      })
    } catch (error) {
      res = error
      console.log(res)
    }
    router.back()
  }
  return (
    <Grid>
      {datos.map((dato) => {
        if (dato.ganada !== null) {
          return (
            <Div key={dato._id}>
              <p hidden='True'>{dato._id}</p>
              <p>Ganada:{'' + dato.ganada}</p>
              <p>Estrellas: {dato.estrellas_ganadas}/{dato.total_estrellas}  ( {
                (dato.estrellas_ganadas / dato.total_estrellas * 100).toFixed(2)
}% )
              </p>
              <p>Destruccion:{dato.total_destruccion_porcentaje}%</p>
              <button onClick={() => router.push('/guerras/' + dato._id)}>Editar</button>
            </Div>
          )
        }
        return (
          <Div key={dato._id}>
            <p hidden='True'>{dato._id}</p>
            <button onClick={() => router.push('/guerras/' + dato._id)}>Insertar</button>
          </Div>
        )
      })}
      <Button onClick={guardarLiga}>Guardar Liga</Button>
    </Grid>
  )
}
export default GuerrasLiga
