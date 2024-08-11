import { render } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'
import { beforeEach } from 'vitest'

describe('App', () => {
  it('check that there is no modal window before pressing the button ', async () => {
    const { queryByPlaceholderText } = render(<App />)
    const inputField = queryByPlaceholderText(/Enter text/i)
    expect(inputField).not.toBeInTheDocument()
  })
})

describe('Test Modal window', () => {
  let component, user, ShowModalBtn, inputField

  beforeEach(async () => {
    component = render(<App />)
    user = userEvent.setup()
    ShowModalBtn = component.getByText(/Show modal/i)
    await user.click(ShowModalBtn)
    inputField = component.getByPlaceholderText(/Enter text/i)
  })
  it('displays the modal window', async () => {
    expect(inputField).toBeInTheDocument()
  })

  it('no focus on the field when opening a window', async () => {
    expect(inputField).not.toHaveFocus()
  })

  it('the focus appears when the button is pressed', async () => {
    const FocusTheInputBtn = component.getByText(/Focus the input/i)
    await user.click(FocusTheInputBtn)
    expect(inputField).toHaveFocus()
  })

  it('click the close button', async () => {
    const closeModalBtn = component.getByText(/Close Modal/i)
    await user.click(closeModalBtn)
    const inputField = component.queryByPlaceholderText(/Enter text/i)
    expect(inputField).not.toBeInTheDocument()
  })
})
