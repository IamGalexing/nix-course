import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { beforeEach, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import App from './App'

const MockUser = [
  {
    id: 1,
    name: 'Leanne Graham',
  },
]

const TEST_URL = 'https://jsonplaceholder.typicode.com/users'

vi.mock('axios')

const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

vi.stubGlobal('ResizeObserver', ResizeObserverMock)

axios.get.mockImplementation((url) => {
  if (url === TEST_URL) {
    return Promise.resolve({
      status: 200,
      data: MockUser,
    })
  } else {
    return Promise.resolve({
      status: 404,
      json: () => Promise.resolve(),
    })
  }
})

describe('App component', () => {
  beforeEach(() => {
    render(<App />)
  })

  test('tooltip is not displayed initially but shows up when hovering over the button', async () => {
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()

    await userEvent.hover(screen.getByTestId('get-btn'))

    expect(screen.getByRole('tooltip')).toBeInTheDocument()
  })

  test('button text changes when clicked', async () => {
    const button = screen.getByTestId('get-btn')
    expect(button).toHaveTextContent('Get Data')

    fireEvent.click(button)

    expect(button).toHaveTextContent('Getting data ...')
  })

  test('getting a list of users after clicking on the button', async () => {
    const button = screen.getByTestId('get-btn')

    fireEvent.click(button)

    await waitFor(() => {
      expect(screen.getByTestId('user-list')).toBeInTheDocument()
    })

    expect(screen.getByText('Leanne Graham')).toBeInTheDocument()
  })

  test('shows text on key down', async () => {
    const text = '+1 respect for the user'

    expect(screen.queryByText(text)).not.toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'f' })

    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
