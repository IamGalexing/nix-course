import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledCrumb = styled.div`
  margin: 10px 0 30px;
  font-size: 14px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  text-transform: capitalize;
  color: inherit;

  &:not(:last-child) {
    color: rgb(159, 145, 15);
  }
`

export const StyledSpan = styled.span`
  margin: 0 10px;
`
