import { render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import userEvent from '@testing-library/user-event'
import App from './App'
import { vi } from 'vitest'
import axios from 'axios'
import { store } from './store/store.js'

const TEST_URL = 'https://api.github.com/users/test/repos'

const mockRepository = [
  {
    id: 1,
    node_id: 'MDEwOlJlcG9zaXRvcnkzMDEwNzUzOTU=',
    name: 'test',
    full_name: 'Test-Repo',
    private: false,
  },
]

vi.mock('axios')

axios.get.mockImplementation((url) => {
  console.log(url)
  if (url === TEST_URL) {
    return Promise.resolve({
      status: 200,
      data: mockRepository,
    })
  } else {
    return Promise.resolve({
      status: 404,
      json: () => Promise.resolve(),
    })
  }
})

global.fetch = vi.fn((url) => {
  if (url === TEST_URL) {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockRepository),
    })
  } else {
    return Promise.resolve({
      ok: false,
      status: 404,
      json: () => Promise.resolve(),
    })
  }
})

describe('App', () => {
  it('should show the repo', async () => {
    const user = userEvent.setup()

    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    await user.type(screen.getByRole('textbox'), 'test')
    await user.click(screen.getByRole('button'))

    await waitFor(() => expect(screen.getByText('Test-Repo')).toBeInTheDocument())
  })

  it('should show the error code', async () => {
    const user = userEvent.setup()

    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    await user.type(screen.getByRole('textbox'), 'error')
    await user.click(screen.getByRole('button'))

    expect(screen.getByText(/404/i))
  })
})
