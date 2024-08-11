import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getTracks } from '../api/getTracks'

const initialState = {
  allTracks: [],
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
}

export const fetchTracksThunk = createAsyncThunk('tracks/fetchTracksThunk', async (inputValue) => {
  return await getTracks(inputValue)
})

const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites = [...state.favorites, action.payload]
      localStorage.setItem('favorites', JSON.stringify(state.favorites))
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter((favorite) => favorite.id !== action.payload)
      localStorage.setItem('favorites', JSON.stringify(state.favorites))
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTracksThunk.fulfilled, (state, action) => {
      if (action.payload && action.payload['release-groups']) {
        state.allTracks = action.payload['release-groups']
      } else {
        state.allTracks = []
      }
    })
  },
})

export default tracksSlice.reducer

export const selectAllTracks = (state) => state.tracks.allTracks
export const selectFavorites = (state) => state.tracks.favorites
export const { addToFavorites, removeFromFavorites } = tracksSlice.actions
