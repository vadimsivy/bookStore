import styles from "./Search.module.scss"
import Icon from "../../icon/Icon"

const Search = () => {
  return (
    <div className={styles.container}>
      <input
        placeholder={'Search'}
        className={styles.input}
      />

      <Icon name={'filter'} strokeWidth={.1}/>
    </div>
  )
}

export default Search