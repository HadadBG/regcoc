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
        <select id='mes' name='mes' defaultValue={datos.mes}>
          {
            meses.map((mes) => {
              return <option key={mes} value={mes}>{mes}</option>
            })
}
        </select>
      </Div>
      <Div>
        <Label hrmlFor='año'>Año:</Label>
        <Input id='año' name='año' type='number' defaultValue={datos.anio} />
      </Div>
      <Div>
        <Label htmlFor='max_puntos'>Puntos Maximos:</Label>
        <Input id='max_puntos' name='max_puntos' type='number' defaultValue={datos.max_puntos} />
      </Div>
      <Div>
        <Label hmtlFor='no_miembros_clan'>Numero de Miembros del Clan:</Label>
        <Input id='no_miembros_clan' name='no_miembros_clan' type='number' defaultValue={datos.no_miembros_clan} />
      </Div>
    </Grid>
  )
}
export default Formulario
