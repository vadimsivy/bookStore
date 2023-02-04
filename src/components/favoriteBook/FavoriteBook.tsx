import styles2 from "../books/book/Book.module.scss"
import Icon from "../icon/Icon"
import styles from "../header/headerIcons/HeaderIcons.module.scss"

import useAppDispatch from "../../hooks/useAppDispatch"
import useAppSelector from "../../hooks/useAppSelector"
import {setFavorites} from "../../store/slices/booksFavoritesSlice"
import {IBookFavorite} from "../../store/slices/types/favoriteBookType"


const FavoriteBook = ({book}: IBookFavorite) => {




  const dispatch = useAppDispatch()
  const favorites = useAppSelector((state) => state.booksFavoritesReducer.favorites)

  const handleClickFavorite = () => {


    dispatch(
      setFavorites(book)
    )
  }
  const isFavorites = favorites.find((favorite) => favorite.isbn13 === book.isbn13)
  return (


      <Icon name={'favorite'}
            strokeWidth={1.5}
            className={styles.icon__favorite}
            stroke={isFavorites ? "var(--color-light-red)" : "white"}
            fill={isFavorites ? "var(--color-light-red)" : "black"}
            onClick={handleClickFavorite}/>

  )
}
export default FavoriteBook