import PropTypes from 'prop-types'

function ToggleSwitch({ isChecked, onToggle }) {
  return (
    <div className="input-box">
      <input type="checkbox" id="checkbox" checked={!!isChecked} onChange={onToggle} />
      <label htmlFor="checkbox">Scales</label>
    </div>
  )
}

ToggleSwitch.propTypes = {
  isChecked: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
}

export default ToggleSwitch
