import Logo from '../../assets/Logo.svg?react'
import styled from 'styled-components'

export const StyledHeader = styled.header`
  min-height: 100px;
  max-height: max-content;
  margin: 0 50px;
  font-size: 14px;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #f1f1f1;
  background-color: transparent;

  @media (max-width: 700px) {
    margin: 0 20px;
  }
`

export const StyledLogo = styled(Logo)`
  margin-bottom: -7px;
  margin-right: 30px;
  &:hover path {
    stroke: #0c8ce9;
  }
`
