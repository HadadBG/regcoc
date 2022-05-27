import { Grid, Div, Label, Input } from './styles'
import React from 'react'

const Formulario = ({ datos = {} }) => {
  const meses = ['Enero', 'Febrero',
    'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
    'Agosto', 'Septiembre', 'Octubre',
    'Noviembre', 'Diciembre']
  return (
    <Grid>

      <Div>
        <Label htmlfor='mes'>Mes:</Label>
        <select id='selector_mes' name='mes' defaultValue={datos.mes}>
          {
            meses.map((mes) => {
              return <option key={mes} value={mes}>{mes}</option>
            })
}
        </select>
      </Div>
      <Div>
        <Label hrmlFor='año'>Año:</Label>
        <Input id='input_año' name='año' type='number' defaultValue={datos.anio} />
      </Div>
      <Div>
        <Label htmlFor='puesto'>Puesto:</Label>
        <Input id='input_puesto' name='puesto' type='number' defaultValue={datos.puesto} />
      </Div>
      <Div>
        <Label htmlFor='liga'>Liga:</Label>
        <Input id='input_liga' name='liga' type='text' defaultValue={datos.liga} />
      </Div>
      <Div>
        <Label htmlFor='estrellas'>Estrellas:</Label>
        <Input id='input_estrellas' name='estrellas' type='number' defaultValue={datos.estrellas_ganadas} />
      </Div>
      <Div>
        <Label htmlFor='destruccion'>Destruccion:</Label>
        <Input id='input_destruccion' name='destruccion' type='number' defaultValue={datos.destruccion_realizada} />
      </Div>
      <Div>
        <Label htmlFor='tamaño'>Tamaño:</Label>
        <Input id='input_tamaño' name='tamaño' type='number' defaultValue={datos.tamano} />
      </Div>
    </Grid>
  )
}
export default Formulario
