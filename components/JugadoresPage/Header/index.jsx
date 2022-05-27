import { Flex, JugadoresDiv, OrdenDiv, FiltrosDiv, CheckBoxes, OtrosFiltros, UltimaGuerra } from './styles'
import React from 'react'
import Downshift from '@components/Downshift'
import DesdeHastaInput from '@components/HomePage/DesdeHastaInput'
const Header = ({ datos, children }) => {
  console.log(datos)
  return (
    <Flex>

      <FiltrosDiv>

        <div>
          <CheckBoxes>
            <div>
              <input
                type='radio' id='huey' name='drone' value='huey'
                defaultChecked
              />
              <label for='huey'>Todo</label>
            </div>

            <div>
              <input type='radio' id='dewey' name='drone' value='dewey' />
              <label for='dewey'>Solo Guerras</label>
            </div>

            <div>
              <input type='radio' id='louie' name='drone' value='louie' />
              <label for='louie'>Solo Ligas</label>
            </div>
          </CheckBoxes>
          <OtrosFiltros>
            <UltimaGuerra>
              <label htmlFor='mesDesde'>Ultima Guerra: </label>
              <select id='selector_mes' name='mesDesde' defaultValue='------'>
                <option value='Alfabetico'>Ataco</option>
                <option value='Ataques'>Participo</option>
                <option value='Ataques'>No participo</option>
              </select>
            </UltimaGuerra>
            <div>
              <label htmlFor='cbLigas'>Todo el Tiempo </label>
              <input type='checkbox' id='cbLigas' value='second_checkbox' defaultChecked />
            </div>
          </OtrosFiltros>
        </div>
      </FiltrosDiv>
      <DesdeHastaInput />

      <OrdenDiv>
        <Downshift />
        <div>
          <select id='selector_mes' name='mesDesde' defaultValue='Alfabetico'>
            <option value='Alfabetico'>Alfabetico</option>
            <option value='Ataques'>% Ataque</option>
            <option value='Fecha'>Fecha</option>
          </select>
          <button>Buscar</button>
        </div>

      </OrdenDiv>
    </Flex>
  )
}
export default Header
