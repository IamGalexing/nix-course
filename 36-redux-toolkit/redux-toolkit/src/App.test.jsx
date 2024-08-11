import { createSlice, configureStore } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import axios from 'axios'
import { Favorites } from './pages/Favorites/Favorites'
import { store } from './store'
import App from './App'

const mockTrack = {
  ['release-groups']: [
    {
      id: '8fc1d057-cf7d-42b1-88af-afa889c384f3',
      'type-id': 'd6038452-8ee0-3f68-affc-2de9a1ede0b9',
      score: 100,
      'primary-type-id': 'd6038452-8ee0-3f68-affc-2de9a1ede0b9',
      count: 1,
      title: 'Bohemian Rhapsody',
      'first-release-date': '2019-02-22',
      'primary-type': 'Single',
      'artist-credit': [
        {
          name: '40 Fingers',
          artist: {
            id: '13188f86-e9a9-467c-b0c4-4123efeb1882',
            name: '40 Fingers',
            'sort-name': '40 Fingers',
          },
        },
      ],
      releases: [
        {
          id: 'fcb7f571-92b0-4394-aab9-399f13a49dac',
          title: 'Bohemian Rhapsody',
        },
      ],
    },
  ],
}
const initialState = {
  value: 0,
  allTracks: [],
  favorites: [
    {
      id: '8fc1d057-cf7d-42b1-88af-afa889c384f3',
      'type-id': 'd6038452-8ee0-3f68-affc-2de9a1ede0b9',
      score: 100,
      'primary-type-id': 'd6038452-8ee0-3f68-affc-2de9a1ede0b9',
      count: 1,
      title: 'Bohemian Rhapsody',
      'first-release-date': '2019-02-22',
      'primary-type': 'Single',
      'artist-credit': [
        {
          name: '40 Fingers',
          artist: {
            id: '13188f86-e9a9-467c-b0c4-4123efeb1882',
            name: '40 Fingers',
            'sort-name': '40 Fingers',
          },
        },
      ],
      releases: [
        {
          id: 'fcb7f571-92b0-4394-aab9-399f13a49dac',
          title: 'Bohemian Rhapsody',
        },
      ],
    },
  ],
}

const tracksSliceMock = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    addToFavorites(state, action) {
      state.favorites = [...state.favorites, action.payload]
    },
    updateFavorites(state, action) {
      state.favorites = [...action.payload]
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter((item) => item.id !== action.payload)
    },
  },
})

const emptyTracksSliceMock = createSlice({
  name: 'tracks',
  initialState: { value: 0, allTracks: [], favorites: [] },
  reducers: {
    addToFavorites(state, action) {
      state.favorites = [...state.favorites, action.payload]
    },
    updateFavorites(state, action) {
      state.favorites = [...action.payload]
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter((item) => item.id !== action.payload)
    },
  },
})

const mockStore = configureStore({
  reducer: {
    tracks: tracksSliceMock.reducer,
  },
})

const emptyMockStore = configureStore({
  reducer: {
    tracks: emptyTracksSliceMock.reducer,
  },
})

const TEST_URL = 'https://musicbrainz.org/ws/2/release-group?fmt=json&query=bohemian'

vi.mock('axios')

axios.get.mockImplementation((url) => {
  if (url === TEST_URL) {
    return Promise.resolve({
      status: 200,
      data: mockTrack,
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
      json: () => Promise.resolve(mockTrack),
    })
  } else {
    return Promise.resolve({
      ok: false,
      status: 404,
      json: () => Promise.resolve(),
    })
  }
})

const renderFunction = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    { wrapper: BrowserRouter }
  )

describe('TrackList', () => {
  test('should show no data if tracks is empty', async () => {
    const user = userEvent.setup()
    const { getByText, getByPlaceholderText, queryByText } = renderFunction()

    await user.type(getByPlaceholderText(/input search text/i), 'empty search result')
    await user.click(getByText(/search/i))

    expect(getByText(/no data/i)).toBeInTheDocument()
    expect(queryByText(/bohemian/i)).not.toBeInTheDocument()
  })
})

describe('Routing App', () => {
  test('App should to move from App to Favorites Page after click on favorites link', async () => {
    const { getByPlaceholderText, queryByPlaceholderText, getByText } = renderFunction()

    const user = userEvent.setup()

    expect(getByPlaceholderText(/input search text/i)).toBeInTheDocument()

    await user.click(getByText(/Favorites/i))

    expect(queryByPlaceholderText(/input search text/i)).not.toBeInTheDocument()
  })

  test('App should to move from Favorites to App Page after click on Home link', async () => {
    const { getByPlaceholderText, queryByPlaceholderText, getByText } = renderFunction()

    const user = userEvent.setup()

    expect(queryByPlaceholderText(/input search text/i)).not.toBeInTheDocument()

    await user.click(getByText(/Home/i))

    expect(getByPlaceholderText(/input search text/i)).toBeInTheDocument()
  })
})

describe('Search Form', () => {
  test('should fetch tracks when click on search button', async () => {
    const user = userEvent.setup()
    const { getByText, getByPlaceholderText } = renderFunction()

    await user.type(getByPlaceholderText(/input search text/i), 'bohemian')
    await user.click(getByText(/search/i))

    expect(getByText(/bohemian/i)).toBeInTheDocument()
  })

  test('should reset input value after clicking on submit button', async () => {
    const user = userEvent.setup()
    const { getByText, getByPlaceholderText } = renderFunction()

    const searchInput = getByPlaceholderText(/input search text/i)

    await user.type(searchInput, 'bohemian')

    expect(searchInput).toHaveValue('bohemian')

    await user.click(getByText(/search/i))

    expect(getByText(/bohemian/i)).toBeInTheDocument()

    expect(searchInput).toHaveValue('')
  })
})

describe('TrackItem', () => {
  test('should have title', async () => {
    const { getByText } = renderFunction()

    expect(getByText(/bohemian/i)).toBeInTheDocument()
  })

  test('should have artist name', async () => {
    const { getByText } = renderFunction()

    expect(getByText(/40 Fingers/i)).toBeInTheDocument()
  })

  test('should change button content after adding track to favorites', async () => {
    const user = userEvent.setup()
    const { getByText, queryByText } = renderFunction()

    expect(getByText(/add to favorite/i)).toBeInTheDocument()
    expect(queryByText(/remove from favorites/i)).not.toBeInTheDocument()

    await user.click(getByText(/add to favorite/i))

    expect(queryByText(/add to favorite/i)).not.toBeInTheDocument()
    expect(getByText(/remove from favorites/i)).toBeInTheDocument()
  })

  test('should change button content after removing track from favorites', async () => {
    const user = userEvent.setup()
    const { getByText, queryByText } = renderFunction()

    // remove from favorites
    await user.click(getByText(/remove from favorites/i))

    expect(getByText(/add to favorite/i)).toBeInTheDocument()
    expect(queryByText(/remove from favorites/i)).not.toBeInTheDocument()

    // add to favorite
    await user.click(getByText(/add to favorite/i))

    expect(queryByText(/add to favorite/i)).not.toBeInTheDocument()
    expect(getByText(/remove from favorites/i)).toBeInTheDocument()

    // remove from favorites
    await user.click(getByText(/remove from favorites/i))

    expect(getByText(/add to favorite/i)).toBeInTheDocument()
    expect(queryByText(/remove from favorites/i)).not.toBeInTheDocument()
  })
})

describe('Favorites page', () => {
  test('should remove value from favorite page after clicking on remove button', async () => {
    const user = userEvent.setup()
    const { getByText, queryByText, rerender } = render(
      <Provider store={mockStore}>
        <Favorites />
      </Provider>
    )

    expect(getByText(/remove from favorites/i)).toBeInTheDocument()

    await user.click(getByText(/remove from favorites/i))

    rerender(
      <Provider store={emptyMockStore}>
        <Favorites />
      </Provider>
    )

    expect(queryByText(/remove from favorites/i)).not.toBeInTheDocument()
  })

  test('should show no data when favorites list is empty', async () => {
    const { getByText } = render(
      <Provider store={emptyMockStore}>
        <Favorites />
      </Provider>
    )

    expect(getByText(/no data/i)).toBeInTheDocument()
  })
})
