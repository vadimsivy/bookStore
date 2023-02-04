import styles from "./burgerMenu.module.scss"

import Search from "../search/Search"

import useAppSelector from "../../../hooks/useAppSelector"
import {Link} from "react-router-dom";
const BurgerMenu = ({handleClickNav}: {handleClickNav:() => void}) => {

  const favorites = useAppSelector((state) => state.booksFavoritesReducer.favorites)
  const countFavorite = Boolean(favorites.length) ? `${favorites.length}` : ''
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
            <li>Cart</li>
          </ul>
        </div>

        <button className={styles.container__signIn}>Sign In</button>
      </div>
    </>
  )
}
export default BurgerMenu