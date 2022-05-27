import { Button } from '@components/Boton/styles'
import React from 'react'
import { Table, Tr, Td, AccionTamaño, P } from './styles'
import { useRouter } from 'next/router'
const TablaLiga = ({ children, datos = [] }) => {
  const router = useRouter()
  return (
    <Table>
      <tbody>
        {datos.map(dato => (
          <Tr key={dato._id}>
            <Td hidden='True'>{dato.id}</Td>
            <Td><P>Temporada de</P><P>{dato.mes} {dato.anio}</P></Td>
            <Td><P>{dato.puesto}.º puesto</P><P>Liga de {dato.liga}</P></Td>
            <Td>
              <P>
                Estrellas<br />{dato.estrellas_ganadas}/{dato.total_estrellas} ( {
                (dato.estrellas_ganadas / dato.total_estrellas * 100).toFixed(2)
}% )
              </P>
            </Td>
            <Td>
              <P>
                Destruccion<br /> {dato.destruccion_realizada}/{dato.total_destruccion} ( {
                (dato.destruccion_realizada / dato.total_destruccion * 100).toFixed(2)
                }% )
              </P>
            </Td>
            <Td><AccionTamaño><p>{dato.tamano} vs {dato.tamano}</p> <Button onClick={() => router.push('/ligas/' + dato._id)}>Editar</Button></AccionTamaño> </Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  )
}
export default TablaLiga
