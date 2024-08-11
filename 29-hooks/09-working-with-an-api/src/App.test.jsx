import { render, act, screen } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import axios from 'axios'

import App from './App'

const mockResponse = [
  {
    id: '01',
    name: 'Nelson Muntz',
    username: 'Nelson.Muntz',
    email: 'Nelson@april.biz',
    phone: '1-770-736-8031 x56442',
    website: 'NelsonM.org',
  },
  {
    id: '02',
    name: 'Waylon Smithersl',
    username: 'Waylon.Smithersl',
    email: 'Waylon@melissa.tv',
    phone: '010-692-6593 x09125',
    website: 'WaylonS.net',
  },
  {
    id: '03',
    name: 'Ralph Wiggum',
    username: 'Ralph.Wiggum',
    email: 'Ralph@yesenia.net',
    phone: '1-463-123-4447',
    website: 'RalphW.info',
  },
]

vi.mock('axios')

axios.get.mockImplementation(() =>
  Promise.resolve({
    status: 200,
    data: mockResponse,
  })
)

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockResponse),
  })
)

describe('App component', () => {
  test('App must have the button', async () => {
    await act(async () => render(<App />))

    expect(screen.getByText(/Search/i)).toBeInTheDocument()
  })

  test('First render must return 3 cards', async () => {
    await act(async () => render(<App />))

    expect(screen.getAllByRole('user-card')).toHaveLength(3)
  })

  test('Change list of user card when press on Button', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    )

    await act(async () => render(<App />))

    expect(screen.getAllByRole('user-card')).toHaveLength(3)

    const button = screen.getByText(/Search/i)
    expect(button).toBeInTheDocument()
    fireEvent.click(button)

    expect(global.fetch).toHaveBeenCalledTimes(2)
  })
})
