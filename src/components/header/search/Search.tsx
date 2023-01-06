import styles from "./Search.module.scss"
import Icon from "../../icon/Icon"

const Search = () => {
  return (
    <div className={styles.container}>
      <input
        placeholder={'Search'}
        className={styles.input}
      />

      <Icon name={'search'} strokeWidth={1.5}/>
    </div>
  )
}

export default Search