import Header from '../../Header'
import { Button, CheckBoxes, GraficaContainer, Grid, ButtonVer, SelectTamaño } from './styles'
import DesdeHastaInput from '@components/HomePage/DesdeHastaInput'
import { useRouter } from 'next/router'
import GraficaPastel from '@components/Graficas/GraficaPastel'
import GraficaPuntos from '@components/Graficas/GraficaPuntos'

const SeccionGuerras = () => {
  const tamaños = ['Todo', 5, 10, 15, 20, 25, 30, 40, 50]
  const router = useRouter()
  const datos = {
    series: [5, 3]
  }
  const datos2 = {
    labels: [1, 2, 3, 4, 5],
    series: [
      [12, 9, 7, 8, 5]
    ]
  }

  return (
    <>
      <Header>

        <div>
          <label htmlFor='tamaño'>Tamaño </label>
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
            <label htmlFor='cbTiempo'>Todo el tiempo </label>
            <input type='checkbox' id='cbTiempo' value='second_checkbox' defaultChecked />
          </div>
          <div>
            <label htmlFor='cbLigas'>Incluir Ligas </label>
            <input type='checkbox' id='cbLigas' value='second_checkbox' defaultChecked />
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
          <GraficaPastel
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
        <ButtonVer onClick={() => router.push('/guerras')}>Ver Guerras</ButtonVer>
      </Grid>
    </>
  )
}
export default SeccionGuerras
