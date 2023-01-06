import Icon from "../../icon/Icon"
import styles from "./HeaderIcons.module.scss"

const HeaderIcons = () => {
  return (

    <div className={styles.headerIcons}>
      <div>
        <Icon name={'favorite'} strokeWidth={2} className={styles.icon}/>
      </div>
      <div>
        <Icon name={'basket'} strokeWidth={2} className={styles.icon}/>
      </div>
      <div>
        <Icon name={'user'} strokeWidth={2} className={styles.icon}/>
      </div>
    </div>

  )
}
export default HeaderIcons