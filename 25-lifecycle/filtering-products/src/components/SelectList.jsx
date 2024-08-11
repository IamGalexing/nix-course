import PropTypes from 'prop-types'
import SelectOption from './SelectOption'

function SelectList({ id, categories, onChange }) {
  return (
    <>
      <label htmlFor={id}>Sorted by:</label>
      <select id={id} onChange={onChange}>
        <SelectOption value="">not sorted</SelectOption>
        {categories.map((category) => (
          <SelectOption key={category} value={category}>
            {category}
          </SelectOption>
        ))}
      </select>
    </>
  )
}

SelectList.propTypes = {
  id: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default SelectList
