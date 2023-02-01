import {useEffect} from "react"
import {useSearchParams} from "react-router-dom"
import useAppDispatch from "../../hooks/useAppDispatch"
import useAppSelector from "../../hooks/useAppSelector"

import Spinner from "../spinner/Spinner"
import Pagination from "../pagination/Pagination"
import Book from "./book/Book"

import {fetchBooksThunks} from "../../store/thunks/fetchBooksThunks"

import styles from "./Books.module.scss"

const Books = () => {
  const [params] = useSearchParams()
  const dispatch = useAppDispatch()
  const {books, error, loading, total} = useAppSelector((state) => state.booksReducer)

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

  console.log(books)

  if (!books.length) {
    return <div>Results not found</div>
  }

  const totalPages = Math.ceil(total / 20)

  return (
    <div className={styles.books}>
      <div className={styles.books__items}>
        {
          books.map((book) =>
            <Book key={book.isbn13} {...book}/>
          )
        }
      </div>

      <Pagination
        currentPage={Number(params.get('page') ?? 1)}
        totalPages={totalPages}
      />
    </div>
  )
}
export default Books