import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { beforeEach } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import App from './App.jsx'

describe('App', () => {
  let findByText
  const signUpButtonText = /Sign Up/i
  afterEach(cleanup)
  beforeEach(
    () =>
      ({ findByText } = render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      ))
  )

  describe('First name field', () => {
    test('Should displayed error message', async () => {
      fireEvent.click(screen.getByText(signUpButtonText))

      expect(await findByText(/First name is required/i)).toBeInTheDocument()
    })
    test('Should displayed min length error message', async () => {
      fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'A' } })

      fireEvent.click(screen.getByText(signUpButtonText))

      expect(await findByText(/First name must be at least 2 characters/i)).toBeInTheDocument()
    })
    test('Should displayed max length error message', async () => {
      fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Lorem Ipsum is simply dummy text' } })

      fireEvent.click(screen.getByText(signUpButtonText))

      expect(await findByText(/First name must not exceed 20 characters/i)).toBeInTheDocument()
    })
  })

  describe('Last name field', () => {
    test('Should displayed error message', async () => {
      fireEvent.click(screen.getByText(signUpButtonText))

      expect(await findByText(/Last Name is required/i)).toBeInTheDocument()
    })
    test('Should displayed min length error message', async () => {
      fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'B' } })

      fireEvent.click(screen.getByText(signUpButtonText))

      expect(await findByText(/Last Name must be at least 2 characters/i)).toBeInTheDocument()
    })
    test('Should displayed max length error message', async () => {
      fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Lorem Ipsum is simply dummy text' } })

      fireEvent.click(screen.getByText(signUpButtonText))

      expect(await findByText(/Last Name must not exceed 20 characters/i)).toBeInTheDocument()
    })
  })

  describe('subscribe field', () => {
    test('Should displayed error message', async () => {
      fireEvent.click(screen.getByText(signUpButtonText))

      expect(await findByText(/Choose any subscribe/i)).toBeInTheDocument()
    })
    test('Should displayed subscribe error message', async () => {
      userEvent.selectOptions(screen.getByLabelText(/Subscribe/i), '')

      fireEvent.click(screen.getByText(signUpButtonText))

      expect(await findByText(/Choose any subscribe/i)).toBeInTheDocument()
    })
  })

  describe('birthday date field', () => {
    test('Should displayed error message', async () => {
      fireEvent.click(screen.getByText(signUpButtonText))

      expect(await findByText(/Birthday is required/i)).toBeInTheDocument()
    })
  })

  describe('password field', () => {
    test('Should displayed error message', async () => {
      fireEvent.click(screen.getByText(signUpButtonText))

      expect(await findByText(/Password is required/i)).toBeInTheDocument()
    })
    test('Should displayed min length error message', async () => {
      fireEvent.change(screen.getByLabelText('Password'), { target: { value: '123' } })

      fireEvent.click(screen.getByText(signUpButtonText))

      expect(await findByText(/Password must be at least 6 characters/i)).toBeInTheDocument()
    })
    test('Should displayed confirm error message', async () => {
      fireEvent.change(screen.getByLabelText('Password'), { target: { value: '123' } })
      fireEvent.change(screen.getByLabelText(/Confirm Password/i), { target: { value: '121' } })

      fireEvent.click(screen.getByText(signUpButtonText))

      expect(await findByText(/Passwords must match/i)).toBeInTheDocument()
    })
  })

  describe('email field', () => {
    test('Should displayed error message', async () => {
      fireEvent.click(screen.getByText(signUpButtonText))

      expect(await findByText(/Email is required/i)).toBeInTheDocument()
    })
    test('Should displayed email error message', async () => {
      userEvent.type(screen.getByLabelText(/Email/), 'invalidemail')

      fireEvent.click(screen.getByText(signUpButtonText))

      expect(await findByText(/Invalid email format/i)).toBeInTheDocument()
    })
  })
})
