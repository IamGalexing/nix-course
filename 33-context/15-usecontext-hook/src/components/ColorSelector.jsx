import { useContext } from 'react'
import { CurrencyContext } from '../context/CurrencyContext'

const ColorSelector = () => {
  const { selectedColor, updateColor, colors } = useContext(CurrencyContext)

  const handleColorClick = (color) => {
    updateColor(color)
  }

  return (
    <div className="colors">
      <div>Choose color:</div>
      <div className="colors-buttons">
        {colors.map((color) => (
          <button
            key={color}
            data-testid={color}
            className={selectedColor === color ? 'selected' : ''}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default ColorSelector
