import {createAsyncThunk} from "@reduxjs/toolkit"
import {
  BASE_URL_API_BOOKSTORE,
  ENDPOINT_NEW_RELEASE_API_BOOKSTORE,
} from "../../variables/booksApi"

const fetchBooksThunks = createAsyncThunk(
  'books',
  async (params, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL_API_BOOKSTORE}${ENDPOINT_NEW_RELEASE_API_BOOKSTORE}?${params}`)
      return await response.json()
    } catch (error){
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export {
  fetchBooksThunks,
}