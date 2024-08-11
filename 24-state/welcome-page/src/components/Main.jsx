import PropTypes from 'prop-types'

export const Main = ({ setName }) => {
  const handleInputChange = ({ target }) => {
    setName(target.value)
  }

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" onChange={handleInputChange} />
    </div>
  )
}

Main.propTypes = {
  setName: PropTypes.func.isRequired,
}
