import Card from '@components/Card'
import Layout from '@components/Layout'
import Formulario from '@components/GuerrasPage/FormularioGuerra'
import Jugadores from '@components/GuerrasPage/Jugadores'
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
  getGuerraById(id:$id){
    _id
    total_estrellas
    estrellas_ganadas
    total_destruccion_porcentaje
    ganada
    liga
    jugadores{
      nombre
      ataques{
        estrellas
        porcentaje
      }
    }
  }
  getMiembros{
    _id
  }
}`,
    variables: { id: id }
  })
  const guerra = res.data.data.getGuerraById
  const miembros = res.data.data.getMiembros
  return { props: { guerra: guerra, miembros: miembros } }
}
const Guerra = ({ guerra, miembros }) => {
  if (!guerra) {
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
            <Formulario datos={guerra} />
            <Jugadores datos={{ jugadores: guerra.jugadores, miembros: miembros }} isLiga={guerra.liga !== null} />
          </Card>

        </Layout>
      </>
    )
  }
}
export default Guerra
