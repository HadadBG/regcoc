import { Div, AñoMes, InputAño, SelectMes, Label } from './styles'
const DesdeHastaInput = () => {
  const meses = ['Enero', 'Febrero',
    'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
    'Agosto', 'Septiembre', 'Octubre',
    'Noviembre', 'Diciembre']

  return (
    <Div>
      <AñoMes>
        <p>Desde:</p>
        <div>
          <label htmlFor='añoDesde'>Año: </label>
          <InputAño id='añoDesde' name='añoDesde' type='number' defaultValue={2022} />
        </div>
        <div>
          <label htmlFor='mesDesde'>Mes: </label>
          <SelectMes id='selector_mes' name='mesDesde' defaultValue='Enero'>
            {
            meses.map((mes) => {
              return <option key={mes} value={mes}>{mes}</option>
            })
}
          </SelectMes>
        </div>
      </AñoMes>
      <AñoMes>
        <p>Hasta:</p>
        <div>
          <Label htmlFor='añoHasta'>Año: </Label>
          <InputAño id='añoHasta' name='añoHasta' defaultValue={2022} type='number' />
        </div>
        <div>
          <label htmlFor='mesHasta'>Mes: </label>
          <SelectMes id='selector_mes' name='mesHasta' defaultValue='Enero'>
            {
            meses.map((mes) => {
              return <option key={mes} value={mes}>{mes}</option>
            })
}
          </SelectMes>
        </div>
      </AñoMes>
    </Div>
  )
}
export default DesdeHastaInput
