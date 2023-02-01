import {IBook} from "../../book/book"

interface IBooksInitialState {
  books: IBook[]
  loading: Boolean
  total: number
  error: string | null
}

interface IBooksDescriptionStatePdf {
  [p: string]: string
}

interface IBookDescription {
  title: string
  subtitle: string
  authors: string
  publisher: string
  isbn10: string
  isbn13: string
  pages: string
  year: string
  rating: string
  desc:  string
  price: number
  image: string
  url: string
  pdf: IBooksDescriptionStatePdf
}

interface IBooksDescriptionState {
  book: IBookDescription
  error: string
  loading: boolean
}

type BooksThunkPayloadAction = {
  error: string
  total: string
  books: IBook[]
}

export type {
  IBooksInitialState,
  BooksThunkPayloadAction,
  IBooksDescriptionState,
  IBookDescription,
}