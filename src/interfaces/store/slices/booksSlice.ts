import {IBook} from "../../../store/slices/types/favoriteBookType"


interface IBooksInitialState {
  books: IBook[]
  loading: Boolean
  total: number
  error: string | null
}

interface IBookDescription {
  title: string,
  year: string,
  subtitle: string,
  error: string,
  desc: string,
  authors: string,
  isbn10: string,
  isbn13: string,
  pages: string,
  url: string,
  price: 0,
  image: string,
  rating: string,
  publisher: string,
  language: string,
}

interface IBooksDescriptionState {
  book: IBook
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