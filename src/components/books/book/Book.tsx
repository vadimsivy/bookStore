import styles from "./Book.module.scss"
import {IBook} from "../../../interfaces/book/book"
import {Link} from "react-router-dom"
const Book = ({title, image, isbn13, price, subtitle, url}: IBook) => {

  return (
    <Link to={`/book-description/${isbn13}`}>
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
    </Link>
  )
}

export default Book