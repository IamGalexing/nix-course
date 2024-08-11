import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  margin-left: 10px;
  display: flex;
  align-items: center;

  & svg {
    fill: currentColor;
  }

  & span {
    padding-left: 5px;
  }

  &.active {
    color: #ffe81f;
  }

  &:not(.active):hover {
    color: rgb(12, 140, 233);
  }
`
