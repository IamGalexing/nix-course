import { useState } from 'react'
import { Header } from './Header'
import { Main } from './Main'

export const Layout = () => {
  const [name, setName] = useState('')

  return (
    <>
      <Header name={name || 'Gest'} />
      <Main setName={setName} />
    </>
  )
}
