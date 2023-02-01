import Layout from "../components/layout/Layout"
import Icon from "../components/icon/Icon"
import {useEffect} from "react"
import {fetchBooksDescriptionThunks} from "../store/thunks/fetchBooksDescriptionThunks"
import useAppDispatch from "../hooks/useAppDispatch"
import {useParams} from "react-router-dom"
import useAppSelector from "../hooks/useAppSelector"

import styles from "../components/header/headerIcons/HeaderIcons.module.scss"
import styles2 from "../components/books/book/Book.module.scss"
import BookDetails from "../components/books/bookDetails/BookDetails"


const BookDescription = () => {
  const dispatch = useAppDispatch()
  const params = useParams()

  const book = useAppSelector((state) => state.booksDescriptionReducer.book)
  const error = useAppSelector((state) => state.booksDescriptionReducer.error)
  const loading = useAppSelector((state) => state.booksDescriptionReducer.loading)

  useEffect(() => {
    dispatch(
      fetchBooksDescriptionThunks(params.id ?? '')
    )
  }, [dispatch])

  return (
    <Layout title={'Favorites'}>
      <Icon name={'arrowLeft'} strokeWidth={1.5} className={styles.icon}/>

      {loading ? (
        <>Loading...</>
      ) : (
        <>
        <h2 className={styles2.titleBox}>{book.title}</h2>
          <div className={styles2.book__flex}>
          <div className={styles2.book__poster}>
            <div className={styles2.descriptionFavorite}>
              <Icon name={'favorite'}
                       strokeWidth={1.5}
                       className={styles.icon}
              stroke={"white"}/></div>
          <img className={styles2.book__image}
            src={book.image}
            alt={book.title}
          />
          </div>
          <BookDetails {...book}/>

          </div>
          <h3 className={styles2.border}>Description:</h3>
          <p>{book.desc}</p>
        </>
      )}
    </Layout>
  )
}

export default BookDescription