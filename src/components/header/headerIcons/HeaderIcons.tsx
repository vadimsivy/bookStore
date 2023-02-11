import Icon from "../../icon/Icon"
import styles from "./HeaderIcons.module.scss"
import useTheme from "../../../hooks/useTheme"
import {Link} from "react-router-dom"
import useViewport from "../../../hooks/useViewport"
import BurgerMenu from "../burgermenu/BurgerMenu"
import {useState} from "react"
import useScrollLock from "../../../hooks/useScrollLock"
import useAppSelector from "../../../hooks/useAppSelector"
import useUser from "../../../hooks/useUser"


const HeaderIcons = () => {
  const favorites = useAppSelector((state) => state.booksFavoritesReducer.favorites)
  const cart = useAppSelector((state) => state.booksCartReducer.cart)
  const theme = useTheme()
  const viewport = useViewport()
  const {loggedIn, logout} = useUser()
  const [isOpen, setIsOpen] = useState(false)

  useScrollLock(isOpen)

  const handleClickNav = () => {
    setIsOpen(!isOpen)
  }
  const handler = () => {
    handleClickNav()
    logout()
  }
  const handlerLapTop = () => {
    logout()
  }

  return (
    <>
      <div className={styles.headerIcons}>
        <div>
          <Icon
            name={theme?.theme === 'dark' ? 'sun' : 'moon'}
            onClick={theme?.handleTheme}
            strokeWidth={1.5}
            className={styles.icon}
          />
        </div>

        {viewport.laptop &&
          <div className={styles.parentDot}>
            <Link to={'/favorites'}>
              <Icon
                name={'favorite'}
                strokeWidth={1.5}
                className={styles.icon}
              />

              {Boolean(favorites.length) &&
                <span className={styles.dot}></span>
              }
            </Link>
          </div>
        }

        <div className={styles.parentDot}>
          <Link to={'/cart'}>
            <Icon
              name={'basket'}
              strokeWidth={1.5}
              className={styles.icon}
            />
          </Link>

          {Boolean(cart.length) &&
            <span className={styles.dot}></span>
          }
        </div>

        {viewport.laptop && !loggedIn &&
          <Link to={'/auth'}>
            <div className={styles.profileUser}>
              <Icon
                name={'user'}
                strokeWidth={1.5}
                className={styles.icon}
              />
            </div>
          </Link>
        }
        {viewport.laptop && loggedIn &&
          <Link to={'/profile'} className={styles.margin}>

            <Icon
              name={'account'}
              strokeWidth={1.5}
              className={styles.icon}
            />

          </Link>
        }
        {!viewport.laptop &&
          <div className={styles.profileUser}>
            <Icon
              name={isOpen ? 'cancel' : 'burger'}
              strokeWidth={1.5}
              className={styles.icon}
              onClick={handleClickNav}
            />
          </div>
        }
        {viewport.laptop && loggedIn &&
          <div className={styles.profileUser} onClick={handlerLapTop}>
            <Icon
            name={'logout'}
            strokeWidth={1.5}
            className={styles.icon}
          />
          </div>}
      </div>

      {isOpen &&
        <BurgerMenu handleClickNav={handleClickNav}/>
      }
    </>
  )
}
export default HeaderIcons