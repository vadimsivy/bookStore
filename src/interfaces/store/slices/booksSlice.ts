import {IBook} from "../../book/book"

interface IInitialState {
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
  IInitialState,
  BooksThunkPayloadAction,
}