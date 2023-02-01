import {createAsyncThunk} from "@reduxjs/toolkit"
import {
  BASE_URL_API_BOOKSTORE, ENDPOINT_BOOKS_DESCRIPTION,
} from "../../variables/booksApi"

export const fetchBooksDescriptionThunks = createAsyncThunk(
  'books',
  async (id: string, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL_API_BOOKSTORE}${ENDPOINT_BOOKS_DESCRIPTION}/${id}`)
      return await response.json()
    } catch (error){
      return thunkAPI.rejectWithValue(error)
    }
  }
)