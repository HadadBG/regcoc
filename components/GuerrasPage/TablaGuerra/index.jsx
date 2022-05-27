import React from 'react'
import { Table, Tr, Td, P, Tbody, Button, Div } from './styles'
import { useRouter } from 'next/router'
const TablaGuerra = ({ children, datos = [] }) => {
  const router = useRouter()

  const botones = ({ liga = null, _id = null }) => {
    if (liga !== null) {
      return (
        <>
          <Button onClick={() => router.push('/guerras/' + _id)}>Editar</Button>
          <Button
            onClick={() => router.push('/ligas/' + liga)}
          >Editar Liga
          </Button>
        </>
      )
    } else {
      return (
        <Button onClick={() => router.push('/guerras/' + _id)}><p>Editar</p></Button>
      )
    }
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
                  <P>Hace {dato.dias} días </P>
                </div>
              </Td>
              <Td>
                <div>
                  <P>
                    Estrellas<br />{dato.estrellas_ganadas}/{dato.total_estrellas} ( {
                (dato.estrellas_ganadas / dato.total_estrellas * 100).toFixed(2)
}% )
                  </P>
                </div>
              </Td>
              <Td>
                <div>
                  <P>
                    Destrucción<br />
                    {(dato.total_destruccion_porcentaje || 0).toFixed(2)}%
                  </P>
                </div>
              </Td>
              <Td>
                <div>
                  <P>{dato.total_estrellas / 3} vs {dato.total_estrellas / 3}</P>
                </div>
              </Td>
              <Td>
                <div>
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
