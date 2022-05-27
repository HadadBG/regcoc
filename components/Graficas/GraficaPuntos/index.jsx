import { Div } from './styles'
import React from 'react'
import ChartistGraph, {} from 'react-chartist'
const Chartist = require('chartist')
const GraficaPuntos = ({ width, height, datos }) => {
  const onDrawHandler = (data) => {
    if (data.type === 'point') {
      // We are creating a new path SVG element that draws a triangle around the point coordinates

      const triangle = Chartist.Svg('path', {
        d: ['M',
          data.x * 2,
          data.y * 2 - 15,
          'L',
          data.x * 2 - 15,
          data.y * 2 + 8,
          'L',
          data.x * 2 + 15,
          data.y * 2 + 8,
          'z'].join(' '),
        style: 'fill-opacity: 1'
      }, 'ct-area')
      // With data.element we get the Chartist SVG wrapper and we can replace the original point drawn by Chartist with our newly created triangle
      data.element.replace(triangle)
    }
  }

  const type = 'Line'
  return (
    <Div height={height} width={width}>
      <ChartistGraph
        listener={{
          draw: e => onDrawHandler(e)
        }} data={datos} type={type} style={{ height: { height }, width: { width } }}
      />
    </Div>
  )
}
export default GraficaPuntos
