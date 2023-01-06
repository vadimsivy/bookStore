import styles from "./Book.module.scss"
import {IBook} from "../../../interfaces/book/book";
const Book = ({title, image, isbn13, price, subtitle, url}: IBook) => {
  return (
    <div className={styles.book}>
      <div className={styles.book__poster}>
        <img
          src={image}
          alt={title}
        />
      </div>

      <h2>{title}</h2>
      <p>{subtitle}</p>
      <p>{price}</p>
    </div>
  )
}

export default Book