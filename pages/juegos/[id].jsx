import Card from '@components/Card'
import Layout from '@components/Layout'
import Formulario from '@components/JuegosPage/FormularioJuego'
import Jugadores from '@components/JuegosPage/JugadoresJuego'
import { GlobalStyle } from 'GlobalStyles'
import React from 'react'
import axios from 'axios'
import DefaultErrorPage from 'next/error'
export async function getServerSideProps (context) {
  const { id } = context.query
  const port = process.env.PORT
  const protocol = process.env.PROTOCOL
  const hostname = process.env.HOST
  axios.defaults.baseURL = protocol + '://' + hostname + ':' + port
  const res = await axios.post('/api', {
    query: `query ($id:String!) {
  getJuegoById(id:$id){
    _id
    mes
    max_puntos
    puntos_conseguidos
    jugadores{
      nombre
      posicion
      puntos
    }
    anio
    no_miembros_clan
  }
  getMiembros{
    _id
  }
}`,
    variables: { id: id }
  })
  const juego = res.data.data.getJuegoById
  const miembros = res.data.data.getMiembros
  return { props: { juego: juego, miembros: miembros } }
}
const Guerra = ({ juego, miembros }) => {
  if (!juego) {
    return (
      <>
        <DefaultErrorPage statusCode={404} />
      </>
    )
  } else {
    return (
      <>
        <GlobalStyle />
        <Layout>
          <Card>
            <Formulario datos={juego} />
            <Jugadores datos={{ jugadores: juego.jugadores, miembros: miembros, puntos: juego.puntos_conseguidos }} />
          </Card>

        </Layout>
      </>
    )
  }
}
export default Guerra
