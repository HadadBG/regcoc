import React from 'react'
import { Table, Tr, Td, P, Tbody, Button, Div } from './styles'
import { useRouter } from 'next/router'
const TablaGuerra = ({ children, datos = [] }) => {
  const router = useRouter()

  const botones = ({ liga = null, _id = null }) => {
    return (
      <Button onClick={() => router.push('/guerras/' + _id)}><p>Ver Detalles</p></Button>
    )
  }
  return (
    <Div>
      <Table id='tabla_guerras'>
        <Tbody>
          {datos.map(dato => (
            <Tr key={dato._id}>
              <td hidden='True'>
                <div>
                  {dato.id}
                </div>
              </td>
              <Td>
                <div>
                  <P> Maquinola </P>
                </div>
              </Td>
              <Td>
                <div>
                  <P>
                    Media Estrellas: {
                (dato.estrellas_ganadas / dato.total_estrellas * 10).toFixed(2)
}
                  </P>
                  <P>Media Destrucción: {(dato.estrellas_ganadas / dato.total_estrellas * 100).toFixed(2)}%</P>
                </div>
              </Td>
              <Td>
                <div>
                  <P>
                    % Ataques: {(dato.total_destruccion_porcentaje || 0).toFixed(2)}%
                  </P>
                  <P>
                    25/03/2022
                  </P>
                </div>
              </Td>
              <Td>
                <div>
                  <P>Ultima Guerra: No participo</P>
                  {botones({ liga: dato.liga, _id: dato._id })}
                </div>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Div>
  )
}
export default TablaGuerra
