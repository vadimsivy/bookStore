import { combineReducers, configureStore } from "@reduxjs/toolkit"
import booksReducer from "./slices/booksSlice"



const rootReducer = combineReducers({
  booksReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})