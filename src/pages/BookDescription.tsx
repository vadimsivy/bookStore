import Layout from "../components/layout/Layout"

import {useEffect, useState} from "react"
import {fetchBooksDescriptionThunks} from "../store/thunks/fetchBooksDescriptionThunks"
import useAppDispatch from "../hooks/useAppDispatch"
import {useParams} from "react-router-dom"
import useAppSelector from "../hooks/useAppSelector"

import styles2 from "../components/books/book/Book.module.scss"
import BookDetails from "../components/books/bookDetails/BookDetails"
import Footer from "../components/footer/Footer"
import Subscribe from "../components/subscribe/Subscribe"
import GoBack from "../components/goBack/GoBack"
import FavoriteBook from "../components/favoriteBook/FavoriteBook";
import TabGallery from "../components/tabs/Tabs";
import Tabs from "../components/tabs/Tabs";


const BookDescription = () => {
  const dispatch = useAppDispatch()

  const params = useParams()

  const favorites = useAppSelector((state) => state.booksFavoritesReducer.favorites)
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
      <GoBack/>

      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <h2 className={styles2.titleBox}>{book.title}</h2>
          <div className={styles2.book__flex}>
            <div className={styles2.book__poster}>
              <div className={styles2.descriptionFavorite}>

              <FavoriteBook book={book}/>
              </div>
              <img className={styles2.book__image}
                   src={book.image}
                   alt={book.title}
              />
            </div>
            <BookDetails {...book}/>

          </div>
          <TabGallery {...book}/>
        </>
      )}
      <Subscribe/>
      <Footer/>
    </Layout>
  )
}

export default BookDescription