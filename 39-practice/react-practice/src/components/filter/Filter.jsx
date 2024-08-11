import Select from 'react-select'
import { StyledFilterWrapper, StyledSpan } from './styles'
import PropTypes from 'prop-types'

const OPTIONS = [
  { value: 'Date', label: 'Date' },
  { value: 'Name', label: 'Name' },
  { value: 'Episode', label: 'Episode' },
]

export const Filter = ({ data, onChange }) => {
  const ColorStyles = {
    control: (baseStyles) => ({
      ...baseStyles,
      border: 'none',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      width: '120px',
      fontWeight: '600',
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      border: 'none',
      fontWeight: '500',
      color: state.data.color,
    }),
  }

  const customTheme = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: 'rgba(12, 140, 233, 0.8)',
      primary: '#ffe81f',
      neutral20: 'grey',
      neutral40: 'rgba(12, 140, 233, 0.8)',
    },
  })

  const handleChangeSelect = ({ value }) => {
    if (value === 'Episode') {
      const sortedById = data.slice().sort((a, b) => a.id - b.id)
      onChange(sortedById)
    } else if (value === 'Name') {
      const sortedByName = data.slice().sort((a, b) => a.name.localeCompare(b.name))
      onChange(sortedByName)
    } else if (value === 'Date') {
      const sortedByReleaseDate = data.slice().sort((a, b) => new Date(a.release_date) - new Date(b.release_date))
      onChange(sortedByReleaseDate)
    }
  }

  return (
    <StyledFilterWrapper>
      <StyledSpan>Sort by:</StyledSpan>
      <Select
        defaultValue={OPTIONS[0]}
        isSearchable={false}
        onChange={handleChangeSelect}
        options={OPTIONS}
        styles={ColorStyles}
        theme={customTheme}
      />
    </StyledFilterWrapper>
  )
}

Filter.propTypes = {
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
}
