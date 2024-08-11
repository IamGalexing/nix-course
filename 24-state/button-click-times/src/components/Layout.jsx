import { useState } from 'react'
import { Button } from './Button'

export const Layout = () => {
  const [count, setCount] = useState(0)

  const onClickHandle = () => {
    setCount(count + 1)
  }

  return (
    <>
      <p>Button has been clicked: {count}</p>
      <Button className={'flex py-1 px-2'} onClick={onClickHandle}>
        {'Click me'}
      </Button>
    </>
  )
}
