import {useEffect, useState} from "react"
import Book from "./book/Book"
import styles from "./Books.module.scss"

const Books = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      setLoading(true)

      const res = await fetch('https://api.itbook.store/1.0/books/9781098103828')


      const response = await fetch('https://api.itbook.store/1.0/new')
      const result = await response.json()
      console.log(result)
      setLoading(false)
      setBooks(result.books ?? [])
    })()
  },[])

  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <div className={styles.books}>
      {books.map((book: any) =>
        <Book key={book.isbn13} {...book}/>
      )}
    </div>
  )
}
export default Books