import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {BooksThunkPayloadAction,IBooksInitialState} from "../../interfaces/store/slices/booksSlice"
import {fetchBooksThunks} from "../thunks/fetchBooksThunks"


const initialState:IBooksInitialState = {
  books: [],
  loading: false,
  total: 0,
  error: null,
}

const booksSearchSlice = createSlice({
  name: "Books",
  initialState,
  reducers: {},
  extraReducers(builder){
    builder.addCase(fetchBooksThunks.pending, (state: IBooksInitialState) => {
      state.loading = true
    })

    builder.addCase(fetchBooksThunks.fulfilled, (state: IBooksInitialState, action: PayloadAction<BooksThunkPayloadAction>) => {
      state.loading = false
      state.books = action.payload.books ?? []
      state.total = Number(action.payload.total)
    })

    builder.addCase(fetchBooksThunks.rejected, (state: IBooksInitialState, action: PayloadAction<any>) => {
      state.loading = false
      state.error = action.payload.message
    })
  }
})
export const {} = booksSearchSlice.actions

export default booksSearchSlice.reducer