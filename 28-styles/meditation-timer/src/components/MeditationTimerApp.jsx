import { useState } from 'react'
import { useTimer } from 'react-timer-hook'
import { Header } from './Header'
import { InputContainer } from './InputContainer'
import { Timer } from './Timer'
import { Button } from './Button'
import { TimerAppContaner } from '../layout/TimerAppContaner'

export const MeditationTimerApp = () => {
  const [inputTime, setInputTime] = useState('0')

  const { seconds, minutes, restart } = useTimer({
    expiryTimestamp: '0',
    autoStart: false,
  })

  const handleInputChange = (input) => {
    setInputTime(input)
  }

  const handleStartTimer = () => {
    const time = new Date()
    time.setSeconds(time.getSeconds() + parseInt(inputTime) * 60)
    restart(time)
  }

  return (
    <TimerAppContaner>
      <Header />
      <InputContainer onChange={handleInputChange} />
      <Timer seconds={seconds} minutes={minutes} />
      <Button type="button" onClick={handleStartTimer} />
    </TimerAppContaner>
  )
}
