import { Grid, Div, Label, Input, Row } from './styles'
import React from 'react'
const Formulario = ({ datos = {} }) => {
  return (

    <Grid>
      <Div>
        <Label htmlFor='estrellas_ganadas'>Estrellas Ganadas:</Label>
        <Input id='estrellas_ganadas' name='estrellas_ganadas' type='number' defaultValue={datos.estrellas_ganadas} />
      </Div>
      <Div>
        <Label hmtlFor='destruccion_realizada'>Destruccion Realizada:</Label>
        <Input id='destruccion_realizada' name='destruccion_realizada' type='number' defaultValue={datos.total_destruccion_porcentaje} />
      </Div>
      <Div>
        <Label htmlFor='resultado'>Resultado:</Label>
        <Row>
          <input name='resultado' type='radio' id='rb_ganada' value='True' defaultChecked={datos.ganada} /> <label htmlFor='rb_ganada'>Ganada</label>
          <input name='resultado' type='radio' id='rb_perdida' value='false' defaultChecked={!datos.ganada} /> <label htmlFor='rb_perdida'>Perdida</label>
        </Row>
      </Div>
    </Grid>
  )
}
export default Formulario
