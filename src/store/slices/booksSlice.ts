import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {BooksThunkPayloadAction,IInitialState} from "../../interfaces/store/slices/booksSlice";
import {fetchBooksThunks} from "../thunks/fetchBooksThunks";


const initialState:IInitialState = {
  books: [],
  loading: false,
  total: 0,
  error: null,
}

const booksSlice = createSlice({
  name: "Books",
  initialState,
  reducers: {},
  extraReducers(builder){
    builder.addCase(fetchBooksThunks.pending, (state: IInitialState) => {
      state.loading = true
    })

    builder.addCase(fetchBooksThunks.fulfilled, (state: IInitialState, action: PayloadAction<BooksThunkPayloadAction>) => {
      state.loading = false
      state.books = action.payload.books
      state.total = Number(action.payload.total)

    })

    builder.addCase(fetchBooksThunks.rejected, (state: IInitialState, action: PayloadAction<any>) => {
      state.loading = false
      state.error = action.payload.message
    })
  }
})
export const {} = booksSlice.actions

export default booksSlice.reducer