import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  font-weight: 600;
  margin: 30px 0;
  color: rgba(225, 225, 230, 1);
`

const InputStyled = styled.input`
  font-weight: 600;
  text-align: center;
  width: 40px;
  font-size: 18px;
  margin: 0 10px;
  padding: 5px;
  color: rgba(124, 124, 138, 1);
  background-color: transparent;
  border: none;
  border-bottom: 3px solid rgba(124, 124, 138, 1);
  cursor: pointer;
  &: hover,
  &: focus {
    outline: none;
  }
  &:focus::placeholder {
  opacity: 0;
}
`

export const InputContainer = ({ onChange }) => {
  const handleChange = (e) => {
    const newValue = e.target.value.replace(/\D/g, '')
    e.target.value = newValue
    if (newValue) onChange(newValue)
  }
  return (
    <Wrapper>
      Set meditation for
      <InputStyled type="text" onChange={handleChange} placeholder="0" maxLength={2} />
      minutes
    </Wrapper>
  )
}

InputContainer.propTypes = {
  onChange: PropTypes.func.isRequired,
}
