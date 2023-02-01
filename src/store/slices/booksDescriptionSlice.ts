import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {fetchBooksDescriptionThunks} from "../thunks/fetchBooksDescriptionThunks"
import {IBookDescription, IBooksDescriptionState} from "../../interfaces/store/slices/booksSlice"


const initialState: IBooksDescriptionState = {
  book: {
    title: '',
    subtitle: '',
    authors: '',
    publisher: '',
    isbn10: '',
    isbn13: '',
    pages: '',
    year: '',
    rating: '',
    desc:  '',
    price: 0,
    image: '',
    url: '',
    pdf: {title: ''}
  },
  error: '',
  loading: false,
}

const booksDescriptionSlice = createSlice({
  name: "booksDescription",
  initialState,
  reducers: {},
  extraReducers(builder){
    builder.addCase(fetchBooksDescriptionThunks.pending, (state: IBooksDescriptionState) => {
      state.loading = true
    })

    builder.addCase(fetchBooksDescriptionThunks.fulfilled, (state: IBooksDescriptionState, action: PayloadAction<IBookDescription>) => {
      state.loading = false
      state.book = action.payload
    })

    builder.addCase(fetchBooksDescriptionThunks.rejected, (state: IBooksDescriptionState, action: PayloadAction<any>) => {
      state.loading = false
      state.error = action.payload
    })
  }
})
export const {} = booksDescriptionSlice.actions

export default booksDescriptionSlice.reducer