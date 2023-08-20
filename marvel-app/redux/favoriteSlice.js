import { createSlice } from  "@reduxjs/toolkit";

const initialState = {
  favorites: []
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
      setFavorites: (state, action) => {
        console.log(state.favorites, action.payload.payload.favoritesUpdated)
        state.favorites = action.payload.payload.favoritesUpdated
      },
      setInitialState: (state) => {
        state.favorites = []
      }
  }
});

export const { setFavorites, setInitialState } = favoritesSlice.actions;

export default favoritesSlice.reducer; 