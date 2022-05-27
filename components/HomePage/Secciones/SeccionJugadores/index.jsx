import Header from '../../Header'
import { Button, CheckBoxes, GraficaContainer, Grid, ButtonVer } from './styles'
import DesdeHastaInput from '@components/HomePage/DesdeHastaInput'
import { useRouter } from 'next/router'
import GraficaBarras from '@components/Graficas/GraficaBarras'
const SeccionJugadores = () => {
  const datos = {
    labels: ['Juan El Matador', 'Maquinola', 'Hadad'],
    series: [
      [800000, 1200000, 1400000],
      [800000, 400000, 500000],
      [300000, 200000, 400000]
    ]
  }
  const datos2 = {
    labels: ['Juan El Matador', 'Maquinola', 'Hadad'],
    series: [
      [800000, 1200000, 1400000]

    ]
  }
  const router = useRouter()
  return (
    <>
      <Header>
        <CheckBoxes>
          <div>
            <label htmlFor='cbox2'>Todo el tiempo </label>
            <input defaultChecked type='checkbox' id='cbox2' value='second_checkbox' />
          </div>
        </CheckBoxes>
        <DesdeHastaInput />
        <Button>Generar</Button>
      </Header>
      <Grid>
        <GraficaContainer>
          <h3>Top Jugadores Guerra</h3>
          <GraficaBarras
            width='100%' height='70%'
            barStroke='10px' ctVerticalMargin='0.1rem'
            datos={datos} seriesBarDistance={18}
          />
        </GraficaContainer>
        <GraficaContainer>
          <h3>Top Jugadores Liga</h3>
          <GraficaBarras
            width='100%' height='70%'
            barStroke='10px' ctVerticalMargin='0.1rem'
            datos={datos} seriesBarDistance={18}
          />
        </GraficaContainer>
        <GraficaContainer>
          <h3>Top Jugadores Juegos</h3>
          <GraficaBarras
            width='100%' height='70%'
            barStroke='50px' ctVerticalMargin='0.1rem'
            datos={datos2} seriesBarDistance={18}
          />
        </GraficaContainer>
        <ButtonVer onClick={() => router.push('/jugadores')}>Ver Jugadores</ButtonVer>
      </Grid>
    </>
  )
}
export default SeccionJugadores
