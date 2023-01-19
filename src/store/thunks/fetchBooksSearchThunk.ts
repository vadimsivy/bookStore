import {createAsyncThunk} from "@reduxjs/toolkit"
import {ISearch} from "../../interfaces/store/thunks/fetchBooksSearchThunk";
import {
  BASE_URL_API_BOOKSTORE,
  ENDPOINT_SEARCH_API_BOOKSTORE
} from "../../variables/booksApi"

const fetchBooksSearchThunk = createAsyncThunk(
  'booksSearch',
  async ({input, page}: ISearch, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL_API_BOOKSTORE}${ENDPOINT_SEARCH_API_BOOKSTORE}/${input}/${page}`)
      return await response.json()
    } catch (error){
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export {
   fetchBooksSearchThunk,
}