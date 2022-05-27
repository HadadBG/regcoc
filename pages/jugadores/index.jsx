import Card from '@components/Card'
import Header from '@components/JugadoresPage/Header'
import Layout from '@components/Layout'
import { GlobalStyle } from 'GlobalStyles'
import TablaJugadores from '@components/JugadoresPage/TablaJugadores'
import React from 'react'
import axios from 'axios'

export async function getServerSideProps (context) {
  const { id } = context.query
  const port = process.env.PORT
  const protocol = process.env.PROTOCOL
  const hostname = process.env.HOST
  axios.defaults.baseURL = protocol + '://' + hostname + ':' + port
  let res = await axios.post('/api', {
    query: `query {
  getMiembros{
    _id
    porcentaje_ataques
    media_porcentaje
    media_estrellas
    ataques_total
  }
}`
  })
  const miembros = res.data.data.getMiembros
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
    
    res = await axios.post('/api', query)
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
  
    
 
  
  return { props: { miembros: miembros,guerras:guerras } }
}

const Jugadores = ({miembros,guerras}) => {
  
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Card>
          <Header datos={{ miembros: miembros }} >
            <h1>Jugadores</h1>
          </Header>
          <TablaJugadores datos={guerras} />

        </Card>

      </Layout>
    </>
  )
}
export default Jugadores
