import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledWrapper = styled.li`
  width: calc(100% - 10px);
  display: inline-block;
  overflow: hidden;
  display: flex;
  gap: 25px;
  align-items: start;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
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
  height: 360px;
  width: 240px;
  object-fit: cover;
  aspect-ratio: 16 / 9;
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
  width: 140px;
  color: rgba(166, 166, 166, 1);
`

export const StyledFieldInfo = styled.div`
  overflow: hidden;
  width: calc(100% - 100px);
  white-space: normal;
  text-overflow: ellipsis;
`
