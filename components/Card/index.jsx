import React from 'react'
import { CardBody, Div } from './styles'
const Card = ({ children }) => (
  <CardBody>
    <Div>
      {children}
    </Div>
  </CardBody>
)

export default Card
