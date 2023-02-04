import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface IFavorite {
  authors: string
  desc: string
  error: string
  image: string | undefined
  isbn10: string
  isbn13: string
  language: string
  pages: string
  price: number
  publisher: string
  rating: string
  subtitle: string
  title: string
  url: string
  year: string
}

interface IFavoritesSliceInitialState {
  favorites: IFavorite[]
}

const initialState: IFavoritesSliceInitialState = {
  favorites: []
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites: (state: IFavoritesSliceInitialState, action: PayloadAction<IFavorite>) => {
       const isFindFavorite = state.favorites
         .find((favorite) => favorite.isbn13 === action.payload.isbn13)

      state.favorites = !isFindFavorite
      ? [action.payload, ...state.favorites]
        : state.favorites.filter((favorite) => favorite.isbn13 !== isFindFavorite.isbn13)
    }
  }
})

export default favoritesSlice.reducer

export const {setFavorites} = favoritesSlice.actions