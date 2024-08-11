import { render, screen, act } from '@testing-library/react'
import { vi } from 'vitest'
import axios from 'axios'
import App from './App'

const MockUser = [
  {
    id: 1,
    name: 'Leanne Graham',
    address: {
      city: 'Gwenborough',
      street: 'Kulas Light',
      suite: 'Apt. 556',
      zipcode: '92998-3874',
    },
  },
  {
    id: 2,
    name: 'John Doe',
    address: {
      city: 'London',
      street: 'Kulas Light',
      suite: 'Apt. 1',
      zipcode: '92998-9936',
    },
  },
]

const TEST_URL = 'https://jsonplaceholder.typicode.com/users'

vi.mock('axios')

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

describe('App', () => {
  test('display users from the server', async () => {
    await act(async () => render(<App />))

    expect(screen.getByTestId('user-list')).toBeInTheDocument()
    const allItems = screen.getAllByTestId('user-item')
    expect(allItems).toHaveLength(2)
    expect(screen.getByText('Leanne Graham')).toBeInTheDocument()
  })
})
