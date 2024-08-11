import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledItemList = styled.li`
  width: calc(50% - 10px);
  padding: 15px;
  box-shadow: 0px 1px 8px 1px rgba(0, 0, 0, 0.4);
  overflow: hidden;

  &:hover {
    background-color: rgba(12, 140, 233, 0.02);
    box-shadow: 0px 1px 8px 1px rgba(12, 140, 233, 1);
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  gap: 25px;
  align-items: start;
`

export const StyledImg = styled.img`
  display: block;
  height: 250px;
  width: 160px;
  object-fit: cover;
  aspect-ratio: 16 / 9;
  object-position: top;
`

export const StyledHeader = styled.h2`
  margin-bottom: 15px;
`

export const StyledDetails = styled.div`
  font-size: 14px;
`

export const StyledFields = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledField = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`

export const StyledFieldTitle = styled.div`
  width: 100px;
  color: rgba(166, 166, 166, 1);
`

export const StyledFieldInfo = styled.div`
  overflow: hidden;
  width: calc(100% - 100px);
  white-space: normal;
  text-overflow: ellipsis;
`
