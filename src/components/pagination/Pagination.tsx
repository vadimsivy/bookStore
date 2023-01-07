import {Link} from "react-router-dom"

import {IPaginationProps} from "../../interfaces/pagination/pagination"
import {getTotalPages} from "../../helpers/pagination"

import styles from "./Pagination.module.scss"

import Icon from "../icon/Icon"

const Pagination = ({currentPage, totalPages}: IPaginationProps) => {
  const isTotalPages = getTotalPages(totalPages)

  return (
    <div className={styles.pagination}>
      <Link to={`?page=${currentPage === 1 ? currentPage : currentPage - 1}`} className={styles.pagination__arrow}>
        <Icon name={'arrowLeft'} strokeWidth={1.5}/>
        Prev
      </Link>

      <div className={styles.pagination__links}>
        {isTotalPages.map((page) =>
          <Link
            to={`?page=${page}`}
            key={page}
            className={currentPage === page ? styles.active : styles.link}
          >
            {page}
          </Link>
        )}
      </div>

      <Link to={`?page=${currentPage === totalPages ? currentPage : currentPage + 1}`} className={styles.pagination__arrow}>
        Next
        <Icon name={'arrowRight'} strokeWidth={1.5}/>
      </Link>
    </div>
  )
}
export default Pagination