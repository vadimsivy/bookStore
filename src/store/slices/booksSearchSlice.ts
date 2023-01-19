import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {BooksThunkPayloadAction,IBooksInitialState} from "../../interfaces/store/slices/booksSlice"
import {fetchBooksSearchThunk} from "../thunks/fetchBooksSearchThunk";


const initialState:IBooksInitialState = {
  books: [],
  loading: false,
  total: 0,
  error: null,
}

const booksSearchSlice = createSlice({
  name: "BooksSearch",
  initialState,
  reducers: {},
  extraReducers(builder){
    builder.addCase(fetchBooksSearchThunk.pending, (state: IBooksInitialState) => {
      state.loading = true
    })

    builder.addCase(fetchBooksSearchThunk.fulfilled, (state: IBooksInitialState, action: PayloadAction<BooksThunkPayloadAction>) => {
      state.loading = false
      state.books = action.payload.books ?? []
      state.total = Number(action.payload.total)
    })

    builder.addCase(fetchBooksSearchThunk.rejected, (state: IBooksInitialState, action: PayloadAction<any>) => {
      state.loading = false
      state.error = action.payload.message
    })
  }
})
export const {} = booksSearchSlice.actions

export default booksSearchSlice.reducer