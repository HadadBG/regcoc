import { Div } from './styles'
import React from 'react'
import ChartistGraph from 'react-chartist'
const GraficaPastel = ({ width, height, datos }) => {
  const sum = function (a, b) { return a + b }
  const opciones = {
    labelInterpolationFnc: function (value) {
      return Math.round(value / datos.series.reduce(sum) * 100) + '%'
    }

  }
  const type = 'Pie'
  return (
    <Div height={height} width={width}>
      <ChartistGraph data={datos} options={opciones} type={type} style={{ height: { height }, width: { width } }} />
    </Div>
  )
}
export default GraficaPastel
