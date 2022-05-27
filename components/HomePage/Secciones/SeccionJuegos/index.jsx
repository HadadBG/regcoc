import Header from '../../Header'
import { Button, CheckBoxes, GraficaContainer, Grid, ButtonVer } from './styles'
import DesdeHastaInput from '@components/HomePage/DesdeHastaInput'
import { useRouter } from 'next/router'
import GraficaPastel from '@components/Graficas/GraficaPastel'
import GraficaBarras from '@components/Graficas/GraficaBarras'

const SeccionJuegos = () => {
  const datos = {
    series: [5, 3]
  }
  const datos2 = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
    series: [
      [800000, 1200000, 1400000, 820000]

    ]
  }
  const router = useRouter()
  return (
    <>
      <Header>
        <CheckBoxes>
          <div>
            <label htmlFor='cbox2'>Todo el tiempo </label>
            <input type='checkbox' id='cbox2' value='second_checkbox' defaultChecked />
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
          <h3>Mejor mes</h3>
          <h4>Diciembre 2022 (100%)</h4>
        </GraficaContainer>
        <GraficaContainer>
          <h3>Resultados</h3>
          <GraficaBarras
            width='100%' height='70%'
            barStroke='50px' ctVerticalMargin='0.1rem'
            datos={datos2} seriesBarDistance={18}
          />
        </GraficaContainer>
        <ButtonVer onClick={() => router.push('/juegos')}>Ver Juegos</ButtonVer>
      </Grid>
    </>
  )
}
export default SeccionJuegos
