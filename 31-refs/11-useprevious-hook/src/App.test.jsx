import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach } from 'vitest'

import App from './App'

describe('test App', () => {
  let component, user

  beforeEach(async () => {
    component = render(<App />)
    user = userEvent.setup()
  })

  it('display the default value ', () => {
    const text = component.getByText('Current value: 0, previous value: just initialized')
    expect(text).toBeInTheDocument()
  })

  it('values are changed by click on the button 10 times', async () => {
    const increaseCounterBtn = component.getByText('Increase counter!')
    for (let i = 1; i < 10; i++) {
      await user.click(increaseCounterBtn)

      const text = component.getByText(`Current value: ${i}, previous value: ${i - 1}`)
      expect(text).toBeInTheDocument()
    }
  })
})
