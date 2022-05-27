import { Div } from './styles'
import React from 'react'
import ChartistGraph from 'react-chartist'
const GraficaBarras = ({ width, height, barStroke, stackBars, ctVerticalMargin, datos, seriesBarDistance }) => {
  const options = {
    stackBars: stackBars,
    seriesBarDistance: seriesBarDistance,
    axisY: {
      labelInterpolationFnc: function (value) {
        return (value / 1000) + 'k'
      }
    }
  }

  const type = 'Bar'
  return (
    <Div height={height} width={width} barStroke={barStroke} ctVerticalMargin={ctVerticalMargin}>
      <ChartistGraph data={datos} options={options} type={type} style={{ height: { height }, width: { width } }} />
    </Div>
  )
}
export default GraficaBarras
