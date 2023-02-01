import Icon from "../../icon/Icon"
import styles from "./HeaderIcons.module.scss"
import useTheme from "../../../hooks/useTheme"
import {Link} from "react-router-dom"


const HeaderIcons = () => {
  const theme = useTheme()
  return (
    <div className={styles.headerIcons}>
      <div>
        <Icon name={theme?.theme === 'dark' ? 'sun' : 'moon'}
              onClick={theme?.handleTheme}
              strokeWidth={1.5}
              className={styles.icon}/>
      </div>
      <div className={styles.parentDot}>
        <Link to={'/favorites'}>
          <Icon name={'favorite'}
                strokeWidth={1.5}
                className={styles.icon}/>
          <span className={styles.dot}></span>
        </Link>
      </div>
      <div className={styles.parentDot}>
        <Icon name={'basket'} strokeWidth={1.5} className={styles.icon}/>
        <span className={styles.dot}></span>
      </div>
      <div className={styles.profileUser}>
        <Icon name={'user'} strokeWidth={1.5} className={styles.icon}/>
      </div>
    </div>

  )
}
export default HeaderIcons