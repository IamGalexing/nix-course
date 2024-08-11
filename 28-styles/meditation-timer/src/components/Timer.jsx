import PropTypes from 'prop-types'
import styled from 'styled-components'
import Digit from './Digit'

const TimerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 30px;
`

const SeparatorContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 16px 25px;
`

const Separator = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: rgba(108, 56, 204, 1);
  border-radius: 50%;
  margin: 10px 0px;
`

export const Timer = ({ seconds, minutes }) => {
  return (
    <TimerContainer>
      <Digit value={minutes} />
      <SeparatorContainer>
        <Separator />
        <Separator />
      </SeparatorContainer>
      <Digit value={seconds} />
    </TimerContainer>
  )
}

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
}
