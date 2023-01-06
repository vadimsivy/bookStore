import {useEffect, useState} from "react"
import Book from "./book/Book"
import styles from "./Books.module.scss"
import {IBook} from "../../interfaces/book/book";
import {fetchBooksThunks} from "../../store/thunks/fetchBooksThunks";
import useAppDispatch from "../../hooks/useAppDispatch";
import useAppSelector from "../../hooks/useAppSelector";
import Spinner from "../spinner/Spinner";

const Books = () => {
  const dispatch = useAppDispatch()
  const {books, error, loading} = useAppSelector((state) => state.booksReducer)

  useEffect(() => {
    dispatch(
      fetchBooksThunks()
    )
  }, [dispatch])

  if (error) {
    return (
      <h1>{error}</h1>
    )
  }

  if (loading) {
    return (
      <div className={styles.spinner}>
        <Spinner/>
      </div>
    )
  }

  return (
    <div className={styles.books}>
      {books.map((book) =>
        <Book key={book.isbn13} {...book}/>
      )}
    </div>
  )
}
export default Books