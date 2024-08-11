import { useState, useRef } from 'react'
import PropTypes from 'prop-types'

export const InputWithCountdown = ({ maxLength }) => {
  const [count, setCount] = useState(maxLength)
  const inputRef = useRef(null)

  const handleChange = () => {
    const remainingChars = maxLength - inputRef.current.value.length
    setCount(remainingChars > 0 ? remainingChars : 0)
  }

  return (
    <div className="input-container">
      <textarea className="input-field" onChange={handleChange} ref={inputRef} data-testid="input-field" rows={3} />
      <div className="input-countdown">Characters Left: {count}</div>
      <div className="input-warning">{count == 0 && 'Character limit exceeded!'}</div>
    </div>
  )
}

InputWithCountdown.propTypes = {
  maxLength: PropTypes.number.isRequired,
}
