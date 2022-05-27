import { Div } from './styles'
import React from 'react'
import ChartistGraph from 'react-chartist'
const GraficaDonut = ({ width, height, datos }) => {
  const sum = function (a, b) { return a + b }
  const opciones = {
    donut: true,
    donutWidth: 50,
    donutSolid: true,
    startAngle: 270,
    total: 200,
    showLabel: true,
    labelInterpolationFnc: function (value) {
      return Math.round(value / datos.series.reduce(sum) * 100) + '%'
    }

  }

  const type = 'Pie'

  return (
    <Div height={height} width={width}>
      <ChartistGraph data={datos} options={opciones} type={type} style={{ height: '170%', width: '100%', margin: '0.3rem 0 0 0' }} />
    </Div>
  )
}
export default GraficaDonut
