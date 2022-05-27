import Header from '../../Header'
import DesdeHastaInput from '../../DesdeHastaInput'
import GraficaBarras from '@components/Graficas/GraficaBarras'
import { CheckBoxes, Button, GraficaContainer } from './styles'

const SeccionGeneral = () => {
  const datos = {
    labels: ['Juan El Matador', 'Maquinola', 'Hadad', 'Maquinola AS', 'DenigranteMan', 'Ahulee'],
    series: [
      [800000, 1200000, 1400000, 1300000, 1300000, 1000000],
      [800000, 400000, 500000, 300000, 500000, 600000],
      [300000, 200000, 400000, 600000, 800000, 500000]
    ]
  }
  return (
    <>
      <Header>
        <CheckBoxes>
          <div>
            <label htmlFor='cbox2'>Todo el tiempo </label>
            <input type='checkbox' defaultChecked id='cbox2' value='second_checkbox' />
          </div>
        </CheckBoxes>
        <DesdeHastaInput />
        <Button>Generar</Button>
      </Header>
      <GraficaContainer>
        <h2>Top Jugadores</h2>
        <GraficaBarras width='100%' height='85%' barStroke='50px' stackBars ctVerticalMargin='0.5rem' datos={datos} />
      </GraficaContainer>
    </>
  )
}
export default SeccionGeneral
