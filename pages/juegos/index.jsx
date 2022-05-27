import Card from '@components/Card'
import Header from '@components/Header'
import Layout from '@components/Layout'
import Tabla from '@components/JuegosPage/TablaJuegos'
import { GlobalStyle } from 'GlobalStyles'
import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

export async function getServerSideProps (context) {
  const port = process.env.PORT
  const protocol = process.env.PROTOCOL
  const hostname = process.env.HOST
  axios.defaults.baseURL = protocol + '://' + hostname + ':' + port
  const query = {
    query: `query {getJuegos {
      _id 
      mes
      max_puntos
      puntos_conseguidos
      anio
      no_participantes
      no_miembros_clan
    }}`
  }
  const res = await axios.post('/api', query)
  const juegos = res.data.data.getJuegos
  return { props: { juegos: juegos } }
}

const Juegos = ({ juegos }) => {
  const handleAgregarJuego = async (params) => {
    const res = await axios.post('/api', {
      query: `mutation{
    insertJuego
  }`
    }
    )
    const insertedId = res.data.data.insertJuego
    router.push('/juegos/' + insertedId)
  }
  const router = useRouter()
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Card>
          <Header>
            <h1>Ultimos Juegos</h1>
            <button
              onClick={handleAgregarJuego}
            >Agregar Juego
            </button>
          </Header>
          <Tabla datos={juegos} />

        </Card>

      </Layout>
    </>
  )
}
export default Juegos
