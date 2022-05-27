import Boton from '@components/Boton'
import Card from '@components/Card'
import Header from '@components/Header'
import Layout from '@components/Layout'
import Tabla from '@components/LigaPage/TablaLiga'
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
    query: `query {getLigas {
      _id 
      mes 
      anio 
      total_estrellas 
      estrellas_ganadas 
      total_destruccion 
      destruccion_realizada 
      liga 
      tamano 
      terminada 
      puesto
    }}`
  }
  const res = await axios.post('/api', query)
  const ligas = res.data.data.getLigas
  return { props: { ligas: ligas } }
}

const Ligas = ({ ligas }) => {
  const handleAgregarLiga = async (params) => {
    const res = await axios.post('/api', {
      query: `mutation{
    insertLiga
  }`
    }
    )
    const insertedId = res.data.data.insertLiga
    router.push('/ligas/' + insertedId)
  }
  const router = useRouter()
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Card>
          <Header>
            <h1>Ultimas Ligas</h1>
            <button
              onClick={handleAgregarLiga}
            >Agregar Liga
            </button>
          </Header>
          <Tabla datos={ligas} />

        </Card>

      </Layout>
    </>
  )
}
export default Ligas
