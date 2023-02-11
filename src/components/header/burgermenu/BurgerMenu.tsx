import styles from "./BurgerMenu.module.scss"

import Search from "../search/Search"

import useAppSelector from "../../../hooks/useAppSelector"
import {Link} from "react-router-dom"
import useUser from "../../../hooks/useUser"
const BurgerMenu = ({handleClickNav}: {handleClickNav:() => void}) => {
  const {loggedIn, logout} = useUser()

  const favorites = useAppSelector((state) => state.booksFavoritesReducer.favorites)
  const cart = useAppSelector((state) => state.booksCartReducer.cart)
  const countFavorite = Boolean(favorites.length) ? `${favorites.length}` : ''
  const countCart = Boolean(cart.length) ? `${cart.length}` : ''



 const handler = () => {
    handleClickNav()
    logout()
  }

  return(
    <>
      <div
        className={styles.drop__layout}
        onClick={handleClickNav}

      />

      <div className={styles.container}>
        <div>
          <div className={styles.container__cancel}>
          </div>
          <Search/>
          <ul className={styles.container__list} onClick={handleClickNav}>
            <Link to={'/favorites'}>
              <li className={styles.container__list_count}>Favorites <span className={styles.countFavorite}>{countFavorite}</span></li>
            </Link>
            <Link to={'/cart'}>
            <li className={styles.container__list_count}>Cart <span className={styles.countFavorite}>{countCart}</span></li>
            </Link>
            {loggedIn && <Link to={'/profile'}>
            <li className={styles.container__list_count}>Go to <span className={styles.countFavorite}>Profile</span></li>
            </Link>}

        </ul>
        </div>

        <Link
          to={'/auth'}
          onClick={handler} className={styles.container__signIn}
        >
          {loggedIn ? 'Logout' : 'Sign In'}
        </Link>
      </div>
    </>
  )
}
export default BurgerMenu