import styles from "./BookDetails.module.scss"
import Icon from "../../icon/Icon"



const createRating = (rating: string): boolean[] => (
  Array.from(
    {length: 5},
    (_, number) => (number + 1) <= Number(rating)
  )
)

const BookDetails = ({...rest}) => {
  const rating = createRating(rest.rating)

  return (
    <div className={styles.borderTop}>
      <div className={styles.detailsHeader}>
        <div className={styles.details}>{rest.price}</div>
        <div className={styles.starsRow}>
          {rating.map((rat, index) =>
              <Icon
                key={index}
                fill={rat ? 'black' : 'gray'}
                stroke={rat ? 'black' : 'gray'}
                name={'star'}
                strokeWidth={1.5}
                width={16}
                height={16}
              />
          )}
        </div>
      </div>
      <div className={styles.details}><p>Authors</p>{rest.authors}</div>
      <div className={styles.details}><p>Publisher</p>{rest.publisher}</div>
      <div className={styles.details}><p>Language</p>{rest.language}</div>
      <div className={styles.details}><p>Format</p><span>Paper book / ebook(PDF)</span></div>
      <div className={styles.buttonDetails}>
        <button className={styles.buttonAddToCart}> Add to cart</button>
      </div>
    </div>
  )
}
export default BookDetails