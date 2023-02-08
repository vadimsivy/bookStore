import useAppSelector from "../hooks/useAppSelector"
import useViewport from "../hooks/useViewport"

import Layout from "../components/layout/Layout"
import GoBack from "../components/goBack/GoBack"
import Rating from "../components/rating/Rating"
import FavoriteBook from "../components/favoriteBook/FavoriteBook"
import Footer from "../components/footer/Footer"
import Icon from "../components/icon/Icon"

import styles3 from "../styles/pages/cartPage/cartPage.module.scss"
import styles2 from "../components/books/book/Book.module.scss"
import styles from "../styles/pages/favoritesPage/favoritesPage.module.scss"
import PopularBooks from "../components/popularBooks/PopularBooks";

const Favorites = () => {
  const favorites = useAppSelector((state) => state.booksFavoritesReducer.favorites)
  const viewport = useViewport()

  return (

    <Layout title={'Favorites'}>
      <GoBack/>
      <h1>Favorites</h1>

      {favorites.map((favorite) =>
        <>
          <div className={styles.container}>
            <div className={styles.container__image}>
              {viewport.mobile && <div className={styles.container__likeMob}>
                <FavoriteBook book={favorite}/>
              </div>}
              <img
                src={favorite.image}
                alt={favorite.title}/>
            </div>
            <div className={styles.container__subscribe}>
              <h1 key={favorite.isbn13}>{favorite.title}</h1>
              <div className={styles2.favorite__gap}>by {favorite.authors},<span>{favorite.publisher}</span></div>
              <div className={styles.container__PR}>
                <div className={styles.container__price}>{favorite.price}</div>
                <Rating rating={favorite.rating}/>
              </div>
            </div>
            <div className={styles.container__Like}>
              {!viewport.mobile && <FavoriteBook book={favorite}/>}
            </div>
          </div>
          <hr/>

        </>
      )}
      {!favorites.length &&
        <div className={styles3.empty}>
          <span>Your Favorite is Empty</span>
          <Icon
            name={'alert'}
            width={36}
            height={36}
          />
          <br/>
          <span>Try add something!</span>
          <Icon
            name={'alien'}
            width={36}
            height={36}
          />
        </div>}
      <PopularBooks/>
      <Footer/>

    </Layout>
  )
}

export default Favorites