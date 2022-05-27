import React, { Fragment, useState } from 'react'
import Layout from '@components/Layout'
import Card from '@components/Card'
import { GlobalStyle } from './../GlobalStyles'
import { useRouter } from 'next/router'
import SeccionContainer from '@components/HomePage/SeccionContainer'
import BotonesNavegacion from '@components/HomePage/BotonesNavegacion'
import 'chartist/dist/chartist'
import 'chartist/dist/chartist.min.css'
const Home = () => {
  const [seccion, setSeccion] = useState('General')
  const handleChangeSeccion = (e) => {
    const botonSeleccionado = e.target
    setSeccion(botonSeleccionado.innerText)
  }
  const router = useRouter()
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Card>
          <BotonesNavegacion handleChangeSeccion={handleChangeSeccion} seccionSeleccionada={seccion} />
          <SeccionContainer seccionSeleccionada={seccion} />
        </Card>
      </Layout>
    </>
  )
}

export default Home
