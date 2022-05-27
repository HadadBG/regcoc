import Card from '@components/Card'
import Layout from '@components/Layout'
import Formulario from '@components/LigaPage/FormularioLiga'
import GuerrasLiga from '@components/LigaPage/GuerrasLiga'
import { GlobalStyle } from 'GlobalStyles'
import React from 'react'
import axios from 'axios'
import DefaultErrorPage from 'next/error'

export async function getServerSideProps (context) {
  const port = process.env.PORT
  const protocol = process.env.PROTOCOL
  const hostname = process.env.HOST
  axios.defaults.baseURL = protocol + '://' + hostname + ':' + port
  const id = context.query
  const query = {
    query: `query ($id:String!) {getLigaById(id:$id) {
      _id 
      mes 
      anio 
      puesto 
      liga 
      estrellas_ganadas 
      destruccion_realizada 
      tamano 
      guerras {
        _id 
        total_estrellas 
        estrellas_ganadas 
        ganada 
        total_destruccion_porcentaje
        fecha
      }}}`,
    variables: id
  }
  const res = await axios.post('/api', query
  )
  const liga = res.data.data.getLigaById
  return { props: { liga: liga } }
}
const Liga = ({ liga }) => {
  if (!liga) {
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
            <Formulario datos={liga} />
            <GuerrasLiga datos={liga.guerras} />
          </Card>

        </Layout>
      </>
    )
  }
}
export default Liga
