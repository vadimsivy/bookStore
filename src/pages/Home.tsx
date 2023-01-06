import Layout from "../components/layout/Layout"
import Books from "../components/books/Books"

import styles from "../styles/main/main.module.scss"

const Home = () => {
  return (

    <Layout title={'Home'}>
      <h1 className={styles.main}>NEW RELEASES BOOKS</h1>
      <Books/>
    </Layout>
  )
}
export default Home