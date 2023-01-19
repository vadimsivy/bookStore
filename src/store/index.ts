import { combineReducers, configureStore } from "@reduxjs/toolkit"
import booksReducer from "./slices/booksSlice"
import booksSearchReducer from "./slices/booksSearchSlice";


const rootReducer = combineReducers({
  booksReducer,
  booksSearchReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})