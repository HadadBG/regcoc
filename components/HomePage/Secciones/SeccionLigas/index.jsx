import Header from '../../Header'
import { Button, CheckBoxes, GraficaContainer, Grid, ButtonVer, SelectTamaño } from './styles'
import DesdeHastaInput from '@components/HomePage/DesdeHastaInput'
import { useRouter } from 'next/router'
import GraficaPuntos from '@components/Graficas/GraficaPuntos'
import GraficaPastel from '@components/Graficas/GraficaPastel'
import GraficaDonut from '@components/Graficas/GraficaDonut'
const SeccionLigas = () => {
  const tamaños = ['Todo', 15, 30]
  const datos = {
    series: [20, 10, 30, 40]
  }
  const datos2 = {
    labels: [1, 2, 3, 4, 5, 6, 7],
    series: [
      [12, 9, 7, 8, 5, 8, 9],
      [13, 7, 8, 9, 10, 8, 9],
      [10, 5, 4, 3, 1, 3, 8]
    ]
  }

  const router = useRouter()
  return (
    <>
      <Header>
        <div>
          <label htmlFor='no_miembros_clan'>Tamaño </label>
          <SelectTamaño id='tamaño' name='tamvño'>
            {
            tamaños.map((tamaño) => {
              return <option key={tamaño} value={tamaño}>{tamaño}</option>
            })
}
          </SelectTamaño>
        </div>
        <CheckBoxes>
          <div>
            <label htmlFor='cbox2'>Todo el tiempo </label>
            <input type='checkbox' id='cbox2' defaultChecked value='second_checkbox' />
          </div>
        </CheckBoxes>
        <DesdeHastaInput />
        <Button>Generar</Button>
      </Header>
      <Grid>
        <GraficaContainer>
          <h3>Participación</h3>
          <GraficaPastel
            width='100%' height='70%'
            datos={datos}
          />
        </GraficaContainer>
        <GraficaContainer>
          <h3>Resultados</h3>
          <GraficaDonut
            width='100%' height='70%'
            datos={datos}
          />

        </GraficaContainer>
        <GraficaContainer>
          <h3>% estrellas</h3>
          <GraficaPuntos
            width='100%' height='70%'
            datos={datos2}
          />
        </GraficaContainer>
        <ButtonVer onClick={() => router.push('/ligas')}>Ver Ligas</ButtonVer>
      </Grid>
    </>
  )
}
export default SeccionLigas
