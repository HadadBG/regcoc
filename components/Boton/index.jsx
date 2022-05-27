import { Button } from './styles'
import React from 'react'
const Boton = ({ texto, onClickEvent }) => (
  <Button onClick={onClickEvent}>{texto}</Button>

)

export default Boton
