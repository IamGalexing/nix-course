import Logo from '../assets/icons/logo.svg'
import styled from 'styled-components'

const Title = styled.h1`
  margin-bottom: 40px;
  font-family: 'Fira Mono', monospace;
  font-weight: 400;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: rgba(255, 255, 255, 1);
`

export const Header = () => {
  return (
    <Title>
      <img src={Logo} alt="logo icon" />
      SimpleTimer
    </Title>
  )
}
