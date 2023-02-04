import styles from "./BookDetails.module.scss"
import Rating from "../../rating/Rating"
import Icon from "../../icon/Icon"
import useAppSelector from "../../../hooks/useAppSelector";
import useAppDispatch from "../../../hooks/useAppDispatch";
import {setCart} from "../../../store/slices/booksCartSlice";





const BookDetails = (props: any) => {
  const dispatch = useAppDispatch()
  const cart = useAppSelector((state) => state.booksCartReducer.cart)

  const handleCart = () => {
    dispatch(
      setCart({
        isbn13: props.isbn13,
        image: props.image,
        title: props.title,
        authors: props.authors,
        publisher:  props.publisher,
        price: props.price,
        count: 1,
      })
    )
  }

  const checkBookToCart = cart.find((book) => book.isbn13 === props.isbn13)

  return (
    <div className={styles.borderTop}>
      <div className={styles.detailsHeader}>
        <div className={styles.details}>{props.price}</div>
        <Rating rating={props.rating}/>
      </div>
      <div className={styles.details}><p>Authors</p>{props.authors}</div>
      <div className={styles.details}><p>Publisher</p>{props.publisher}, {props.year}</div>
      <div className={styles.details}><p>Language</p>{props.language}</div>
      <div className={styles.details}><p>Format</p><span>Paper book / ebook(PDF)</span></div>
      <details className={styles.container}>
        <summary className={styles.title}>
          <div className={styles.moreDetails}>
          <span>More details</span>
          <Icon
            name={'chevronDown'}
            width={18}
            height={18}
            strokeWidth={2}

          />
          </div>
        </summary>
        <p className={styles.moreDetailsSubscribe}>{props.subtitle}</p>
      </details>
      <div className={styles.buttonDetails}>
        <button
          className={styles.buttonAddToCart}
          onClick={handleCart}
          disabled={!!checkBookToCart}
        >
          {!checkBookToCart ? 'Add to cart' : 'Added'}
        </button>

        <button className={styles.buttonPreview}>Preview Book</button>
      </div>
    </div>
  )
}
export default BookDetails