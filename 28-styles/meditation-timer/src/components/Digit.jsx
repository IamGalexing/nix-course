import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DigitContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
`

const SingleDigit = styled.span`
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;
  position: relative;
  display: flex;
  flex: 0 1 25%;
  font-size: 100px;
  background-color: rgba(41, 41, 46, 1);
  border-radius: 5px;
  padding: 0 16px;
  color: rgba(225, 225, 230, 1);
  &:first-child {
    margin-right: 10px;
  }
`

export default function Digit({ value }) {
  const leftDigit = value >= 10 ? value.toString()[0] : '0'
  const rightDigit = value >= 10 ? value.toString()[1] : value.toString()
  return (
    <Container>
      <DigitContainer>
        <SingleDigit>{leftDigit}</SingleDigit>
        <SingleDigit>{rightDigit}</SingleDigit>
      </DigitContainer>
    </Container>
  )
}

Digit.propTypes = {
  value: PropTypes.number.isRequired,
}
