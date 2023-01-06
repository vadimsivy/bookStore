import Icon from "../../icon/Icon"
import styles from "./HeaderIcons.module.scss"
import useTheme from "../../../hooks/useTheme";


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
      <div>
        <Icon name={'favorite'} strokeWidth={1.5} className={styles.icon}/>
      </div>
      <div>
        <Icon name={'basket'} strokeWidth={1.5} className={styles.icon}/>
      </div>
      <div>
        <Icon name={'user'} strokeWidth={1.5} className={styles.icon}/>
      </div>
    </div>

  )
}
export default HeaderIcons