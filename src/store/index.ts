import { combineReducers, configureStore } from "@reduxjs/toolkit"

import {persistReducer, persistStore} from "redux-persist"
import persistConfig from "./persist/persistConfig"
import {FLUSH, PAUSE, PERSIST, REHYDRATE, PURGE, REGISTER} from "redux-persist/es/constants"

import booksReducer from "./slices/booksSlice"
import booksSearchReducer from "./slices/booksSearchSlice"
import booksDescriptionReducer from "./slices/booksDescriptionSlice"
import booksFavoritesReducer from "./slices/booksFavoritesSlice"
import booksCartReducer from "./slices/booksCartSlice"
import booksUsersReducer from "./slices/booksUsers"
import booksUserReducer from "./slices/booksUser"

const rootReducer = combineReducers({
  booksReducer,
  booksSearchReducer,
  booksDescriptionReducer,
  booksFavoritesReducer,
  booksCartReducer,
  booksUsersReducer,
  booksUserReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
})

export const persistedStore = persistStore(store)