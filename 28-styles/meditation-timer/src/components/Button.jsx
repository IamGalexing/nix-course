import imagePlay from '../assets/icons/play.svg'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 5px;
  margin: 20px 0 0;
  padding: 12px;
  border-radius: 5;
  outline: none;
  border: none;
  color: rgba(251, 251, 251, 1);
  background-color: rgba(108, 56, 204, 1);
  border-radius: 5px;
  &: hover {
    background-color: rgba(108, 56, 204, 0.8);
    cursor: pointer;
  }
`

export const Button = (props) => {
  return (
    <ButtonStyled {...props}>
      <img src={imagePlay} alt="start timer icon" />
      Run Timer
    </ButtonStyled>
  )
}
