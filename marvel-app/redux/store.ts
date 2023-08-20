import { configureStore } from '@reduxjs/toolkit'
import favoritesSlice from './favoriteSlice'

export const store = configureStore({
  reducer: {
    favorites: favoritesSlice
  },
})