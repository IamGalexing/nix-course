import Countdown from 'react-countdown'
import PropTypes from 'prop-types'

const CountdownTimer = ({ durationInSeconds }) => {
  const countDownTime = Date.now() + durationInSeconds * 1000

  const renderer = ({ total, completed }) => (
    <p className="countdown-text">{completed ? 'Time is up!' : `${total / 1000} seconds remaining`} </p>
  )

  return (
    <div className="countdown-container">
      <h1 className="countdown-title">Countdown Timer</h1>
      <Countdown date={countDownTime} renderer={renderer} />
    </div>
  )
}

CountdownTimer.propTypes = {
  durationInSeconds: PropTypes.number.isRequired,
}

export default CountdownTimer
