import tracksSlice from './tracksSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    tracks: tracksSlice,
  },
})
