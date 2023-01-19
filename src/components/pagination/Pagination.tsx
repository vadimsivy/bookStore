import {Link} from "react-router-dom"

import {IPaginationProps} from "../../interfaces/pagination/pagination"
import {getTotalPages} from "../../helpers/pagination"
import {getNextAndPrevPages} from "../../helpers/getNextAndPrevPages"

import styles from "./Pagination.module.scss"

import Icon from "../icon/Icon"

const getSlicePages = (pages: number[], currentPage: number, slice: number): number[] => {
  const indexPage = pages.indexOf(currentPage)

  if (indexPage === -1) {
    return []
  }

  if (pages.length < 5) {
    return pages
  }

  // @ts-ignore
  if (currentPage > pages.at(-5)) {
    return pages.slice(pages[pages.length - 5], indexPage + slice)
  }

  return pages.slice(indexPage, indexPage + slice)
}

const Pagination = ({currentPage, totalPages, input}: IPaginationProps) => {
  const isTotalPages = getTotalPages(totalPages)
  const {prevPage, nextPage} = getNextAndPrevPages(totalPages, currentPage)

  if (totalPages === 1) {
    return <></>
  }

  const slicePages = getSlicePages(isTotalPages, currentPage, 4)

  return (
    <div className={styles.pagination}>
      <Link to={`/search/${input}/${prevPage}`} className={styles.pagination__arrow}>
        <Icon name={'arrowLeft'} strokeWidth={1.5}/>
        Prev
      </Link>

      <div className={styles.groupPagination}>
        {currentPage > 1 && totalPages > 4 &&
          <>
            <Link
              to={`/search/${input}/1`}
              className={styles.link}
            >
              1
            </Link>

            <div>...</div>
          </>
        }

        <div className={styles.pagination__links}>
          {slicePages.map((page) =>
            <Link
              to={`/search/${input}/${page}`}
              key={page}
              className={currentPage === page ? styles.active : styles.link}
            >
              {page}
            </Link>
          )}
        </div>

        { // @ts-ignore
          slicePages.at(-1) < totalPages &&
          '...'
        }

        { // @ts-ignore
          slicePages.at(-1) < totalPages &&
          <Link
            to={`/search/${input}/${totalPages}`}
            className={currentPage === totalPages ? styles.active : styles.link}
          >
            {totalPages}
          </Link>
        }

      </div>

      <Link to={`/search/${input}/${nextPage}`} className={styles.pagination__arrow}>
        Next
        <Icon name={'arrowRight'} strokeWidth={1.5}/>
      </Link>
    </div>
  )
}
export default Pagination






