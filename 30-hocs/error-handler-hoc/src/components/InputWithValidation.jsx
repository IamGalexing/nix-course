import { useState } from 'react'
import { InputEmail } from './InputEmail'

const handleInputError = (WrappedComponent) => {
  return function WithErrorHandler(props) {
    const [isError, setIsError] = useState(false)

    const handleInputChange = ({ target }) => {
      if (!target.value) {
        setIsError(false)
      } else {
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(target.value)
        isValidEmail ? setIsError(false) : setIsError(true)
      }
    }

    return (
      <div className={`${isError ? 'has-input-error' : ''}`}>
        <WrappedComponent {...props} onInputChange={handleInputChange} />
        {isError && <span className="error-message">Invalid value!</span>}
      </div>
    )
  }
}

const InputWithValidation = handleInputError(InputEmail)

export default InputWithValidation
