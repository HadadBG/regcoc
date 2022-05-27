import React from 'react'
import { Table, Tr, Td, P, Tbody, Button, Div } from './styles'
import { useRouter } from 'next/router'
const TablaJuegos = ({ children, datos = [] }) => {
  const router = useRouter()

  return (
    <Div>
      <Table id='tabla_juegos'>
        <Tbody>
          {datos.map(dato => (
            <Tr key={dato._id}>
              <td hidden='True'>
                <div>
                  {dato.id}
                </div>
              </td>
              <Td><P>Temporada de</P><P>{dato.mes} {dato.anio}</P></Td>
              <Td>
                <div>
                  <P>
                    Puntos: {dato.puntos_conseguidos}/{dato.max_puntos} ( {
                (dato.puntos_conseguidos / dato.max_puntos * 100).toFixed(2)
}% )
                  </P>
                </div>
              </Td>
              <Td>
                <div>
                  <P>Participacion: {dato.no_participantes}/{dato.no_miembros_clan} ( {
                    (dato.no_participantes / dato.no_miembros_clan * 100).toFixed(2)
}% )
                  </P>
                </div>
              </Td>
              <Td>
                <div>
                  <Button onClick={() => router.push('/juegos/' + dato._id)}><p>Editar</p></Button>
                </div>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Div>
  )
}
export default TablaJuegos
