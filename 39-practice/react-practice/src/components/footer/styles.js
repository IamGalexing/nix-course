import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterWrapper = styled.footer`
  height: 60px;
  padding: 0 50px;
  margin-top: 50px;
  font-size: 12px;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: rgba(166, 166, 166, 1);
  background-color: rgba(41, 41, 41, 1);

  @media (max-width: 700px) {
    padding: 0 20px;
  }
`

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  color: #f1f1f1;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin-left: 10px;
  display: flex;
  align-items: center;

  &:not(.active):hover {
    color: rgb(12, 140, 233);
  }
`
