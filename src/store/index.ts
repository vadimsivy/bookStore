import { combineReducers, configureStore } from "@reduxjs/toolkit"

import booksReducer from "./slices/booksSlice"
import booksSearchReducer from "./slices/booksSearchSlice"
import booksDescriptionReducer from "./slices/booksDescriptionSlice"


const rootReducer = combineReducers({
  booksReducer,
  booksSearchReducer,
  booksDescriptionReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})