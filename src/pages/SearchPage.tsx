import {useParams, useSearchParams} from "react-router-dom"
import {useEffect} from "react"
import {fetchBooksSearchThunk} from "../store/thunks/fetchBooksSearchThunk"

import useAppDispatch from "../hooks/useAppDispatch"
import useAppSelector from "../hooks/useAppSelector"

import Book from "../components/books/book/Book"
import Layout from "../components/layout/Layout"
import Pagination from "../components/pagination/Pagination"

import styles from "../styles/pages/searchPage/container__searchPage.module.scss"
import Footer from "../components/footer/Footer";
import useViewport from "../hooks/useViewport";
import Search from "../components/header/search/Search";

const SearchPage = () => {
  const params = useParams()

  const dispatch = useAppDispatch()
  const {books, total, loading, error} = useAppSelector((state) => state.booksSearchReducer)

  useEffect(() => {
    dispatch(fetchBooksSearchThunk({
      input: params.input,
      page: params.page,
    }))
  }, [params])

  const totalPages = Math.ceil(total / 20)
  const viewport = useViewport()
  return (
    <Layout title={'SearchPage'}>
      <div className={styles.container__search}>
        {!viewport.laptop && <Search/>}
      </div>
      <h1 className={styles.container__tittle}>{params.input} Search results</h1>
      <div className={styles.container__searchPage}>
        {
          books.map((book) =>
            <Book key={book.isbn13} {...book}/>
          )
        }
      </div>
      <Pagination
        input={params.input}
        currentPage={Number(params.page ?? 1)}
        totalPages={totalPages}
      />
      <Footer/>
    </Layout>
  )

}
export default SearchPage