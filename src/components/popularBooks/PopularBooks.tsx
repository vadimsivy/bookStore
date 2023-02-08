import {useEffect, useState} from "react"

import {fetchBooksThunks} from "../../store/thunks/fetchBooksThunks"


import useAppSelector from "../../hooks/useAppSelector"
import useAppDispatch from "../../hooks/useAppDispatch"
import styles from "../books/Books.module.scss"
import Book from "../books/book/Book"
import Icon from "../icon/Icon"


const PopularBooks = () => {
  const [pagination, setPagination] = useState(0)
  const dispatch = useAppDispatch()
  const Books = useAppSelector(state => state.booksReducer)

  useEffect(() => {
    dispatch(fetchBooksThunks())
  }, [])

  const handlePrev = () => {
    setPagination(pagination > 0 ? pagination - 1 : 0)
  }

  const handleNext = () => {
    setPagination(pagination < 10 ? pagination + 1 : 10)
  }

  if (Books.loading) {
    return <>loading...</>
  }

  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
      <h1>Popular books</h1>
        <div>
        <button onClick={handlePrev}>
        <Icon
          name={'arrowLeft'}
          width={48}
          height={48}
        />
      </button>
      <button onClick={handleNext}>
        <Icon
          name={'arrowRight'}
          width={48}
          height={48}
        />
      </button>
        </div>

      </div>

      <div className={styles.books}>
        <div className={styles.books__items}>
          {Books.books.slice(pagination, pagination + 3).map((book) =>
            <Book key={book.isbn13} {...book}/>
          )}
        </div>
      </div>
    </div>
  )
}
export default PopularBooks