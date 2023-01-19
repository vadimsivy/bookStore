import {IBook} from "../../book/book"

interface IBooksInitialState {
  books: IBook[]
  loading: Boolean
  total: number
  error: string | null
}

type BooksThunkPayloadAction = {
  error: string
  total: string
  books: IBook[]
}

export type {
  IBooksInitialState,
  BooksThunkPayloadAction,
}