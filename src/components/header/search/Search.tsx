import styles from "./Search.module.scss"
import Icon from "../../icon/Icon"
import {ChangeEvent} from "react";
import useAppDispatch from "../../../hooks/useAppDispatch";
import {fetchBooksSearchThunk, fetchBooksThunks} from "../../../store/thunks/fetchBooksThunks";
import useDebounce from "../../../hooks/useDebounce";

const Search = () => {
  const dispatch = useAppDispatch()
  const debounce = useDebounce()
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    debounce(() => {
      value
        ?  dispatch(fetchBooksSearchThunk(e.target.value))
        :  dispatch(fetchBooksThunks())
    }, 800)
  }
  return (
    <div className={styles.container}>
      <input
        placeholder={'Search'}
        className={styles.input}
        onChange={handleOnChange}
      />

      <Icon name={'search'} strokeWidth={1.5}/>
    </div>
  )
}

export default Search