import Card from '@components/Card'
import Header from '@components/Header'
import Layout from '@components/Layout'
import Tabla from '@components/GuerrasPage/TablaGuerra'
import { GlobalStyle } from 'GlobalStyles'
import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

export async function getServerSideProps (context) {
  const port = process.env.PORT
  const protocol = process.env.PROTOCOL
  const hostname = process.env.HOST
  axios.defaults.baseURL = protocol + '://' + hostname + ':' + port
  const variables = { page: 0, guerrasPerPage: 10 }
  const query = {
    query: `query($page:Int,$guerrasPerPage:Int){
      getGuerras(page:$page,guerrasPerPage:$guerrasPerPage){
        _id
        total_destruccion_porcentaje
        total_estrellas
        estrellas_ganadas
        ganada
        liga
        fecha
      }}`,
    variables: variables

  }
  const res = await axios.post('/api', query)
  let guerras = res.data.data.getGuerras
  guerras = guerras.map(guerra => {
    const hoy = new Date()
    const hoyInicioDelDia = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate())
    const fechaGuerra = new Date(guerra.fecha.substring(0, 10))
    const calculoDias = Math.floor((hoyInicioDelDia - fechaGuerra) / (1000 * 3600 * 24))
    const dias = calculoDias >= 0 ? calculoDias : 0
    delete guerra.fecha
    return { dias: dias, ...guerra }
  })

  return { props: { guerras: guerras } }
}

const Guerras = ({ guerras }) => {
  const router = useRouter()

  const handleAgregarGuerra = async (params) => {
    const res = await axios.post('/api', {
      query: `mutation{
    insertGuerra
  }`
    }
    )
    const insertedId = res.data.data.insertGuerra
    router.push('/guerras/' + insertedId)
  }
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Card>
          <Header>
            <h1>Ultimas Guerras</h1>
            <button
              onClick={handleAgregarGuerra}
            >
              Agregar Guerra
            </button>
          </Header>
          <Tabla datos={guerras} />

        </Card>

      </Layout>
    </>
  )
}
export default Guerras
