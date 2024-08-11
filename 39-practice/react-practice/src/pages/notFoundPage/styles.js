import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const StyledTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: rgb(159, 145, 15);
`
