import {FC} from "react"
import styles from "../books/bookDetails/BookDetails.module.scss"
import Icon from "../icon/Icon"




export const createRating = (rating: string): boolean[] => (
  Array.from(
    {length: 5},
    (_, number) => (number + 1) <= Number(rating)
  )
)


type RatingProps = {
  rating: string
}

const Rating: FC<RatingProps> = ({rating}) => {
  const listRating = createRating(rating)

  return (
    <div className={styles.starsRow}>
      {listRating.map((rat, index) =>
        <Icon
          key={index}
          fill={rat ? 'var(--color-rating)' : 'gray'}
          stroke={rat ? 'var(--color-rating)' : 'gray'}
          name={'star'}
          strokeWidth={1.5}
          width={16}
          height={16}
        />
      )}
    </div>
  )
}
export default Rating