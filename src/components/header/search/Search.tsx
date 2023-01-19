import {fetchBooksSearchThunk} from "../../../store/thunks/fetchBooksSearchThunk"
import {ChangeEvent, useRef, useState} from "react"

import useAppDispatch from "../../../hooks/useAppDispatch"
import useDebounce from "../../../hooks/useDebounce"
import useAppSelector from "../../../hooks/useAppSelector"
import useClickOutSide from "../../../hooks/useClickOutSide"

import BookForSearch from "../../books/bookForSearch/BookForSearch"
import Icon from "../../icon/Icon"
import Spinner from "../../spinner/Spinner"

import styles from "./Search.module.scss"
import {Link} from "react-router-dom";

const Search = () => {
  const [showResults, setShowResults] = useState(false)
  const [input, setInput] = useState('')

  const dispatch = useAppDispatch()

  const {books, error, loading, total} = useAppSelector((state) => state.booksSearchReducer)

  const debounce = useDebounce()

  const ref = useRef(null)
  const clickOutSide = useClickOutSide(ref)

  const handleClick = () => {
    setShowResults(true)
    clickOutSide(() => {
      setShowResults(false)
    })
  }
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setInput(value)

    if (!value) {
      return
    }

    debounce(() => {
      dispatch(fetchBooksSearchThunk({
        input: e.target.value,
        page: '1',
      }))
    }, 800)
  }
  return (
    <div className={styles.container}>
      <label className={styles.search} onClick={handleClick} ref={ref}>
        <input
          placeholder={'Search'}
          className={styles.input}
          onChange={handleOnChange}
        />
        <Icon name={'search'} strokeWidth={1.5}/>
      </label>
      {showResults &&
        <div className={styles.results} >
          {error && <div>{error}</div>}
          {loading && <Spinner/>}
          {books.map((book) =>
            <BookForSearch key={book.isbn13} {...book}/>
          )}
          <Link to={`/search/${input}/1`} className={styles.buttonShowAll}>Show All</Link>
        </div>
      }
    </div>

  )
}

export default Search