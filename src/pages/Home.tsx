import Layout from "../components/layout/Layout"
import Books from "../components/books/Books"

import styles from "../styles/main/main.module.scss"
import Subscribe from "../components/subscribe/Subscribe";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (

    <Layout title={'Home'}>
      <h1 className={styles.main}>NEW RELEASES BOOKS</h1>
      <Books/>
      <Subscribe/>
      <Footer/>
    </Layout>
  )
}
export default Home