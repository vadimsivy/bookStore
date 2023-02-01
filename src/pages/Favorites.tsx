import Layout from "../components/layout/Layout"
import styles from "../components/header/headerIcons/HeaderIcons.module.scss";
import Icon from "../components/icon/Icon";


const Favorites = () => {
  return (

    <Layout title={'Favorites'}>
      <Icon name={'arrowLeft'} strokeWidth={1.5} className={styles.icon}/>
      <h1>Favorites</h1>

    </Layout>
  )
}

export default Favorites