import PropTypes from 'prop-types'

function SelectOption({ value, children }) {
  return <option value={value}>{children}</option>
}

SelectOption.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.node.isRequired,
}

export default SelectOption
