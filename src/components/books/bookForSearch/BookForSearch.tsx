import styles from "./BookForSearch.module.scss"
import {IBook} from "../../../interfaces/book/book";

const BookForSearch = ({title, image, isbn13, price, subtitle, url}: IBook) => {

  return (
    <div className={styles.book}>
      <div className={styles.book__imgAndTitle}>
      <div className={styles.book__poster}>
        <img
          src={image}
          alt={title}
        />
      </div>
      <h2>{title}</h2>
      </div>
      <p>{price}</p>
    </div>
  )
}

export default BookForSearch