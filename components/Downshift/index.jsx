import React, { useState } from 'react'
import { useCombobox } from 'downshift'
import { matchSorter } from 'match-sorter'
import { Label, Input, Ul } from './styles'
const Downshift = ({ items ,label}) => {
  const [inputItems, setInputItems] = useState(items)
  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      const res = matchSorter(items, inputValue)
      setInputItems((res.length ? res : [inputValue]).slice(0, 5))
    }
  })
  return (
    <div>
      <Label {...getLabelProps()}>{label}</Label>
      <div {...getComboboxProps()}>
        <Input {...getInputProps()} id='nombre_jugador' />
      </div>
      <Ul {...getMenuProps()}>
        {isOpen &&
            inputItems.map((item, index) => (
              <li
                style={
                  highlightedIndex === index
                    ? { backgroundColor: 'gray' }
                    : {}
                }
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
              >
                {item}
              </li>
            ))}
      </Ul>
    </div>
  )
}

export default Downshift
