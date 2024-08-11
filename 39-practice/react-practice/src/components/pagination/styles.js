import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 40px 0 20px;
`

export const StyledButton = styled.button`
  background-color: rgba(159, 145, 15, 0.1);
  color: #000;
  font-weight: 700;
  border: 1px solid rgba(159, 145, 15, 1);
  border-radius: 5px;
  padding: 10px 15px;
  margin: 10px 5px;
  cursor: pointer;

  &.active {
    background-color: rgba(159, 145, 15, 1);
    color: #fff;
  }
`
