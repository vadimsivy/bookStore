import {useEffect} from "react"
import {LayoutProps} from "../../interfaces/layout";

import styles from "./Layout.module.scss"


const Layout = ({children, title}: LayoutProps) => {
  useEffect( () => {
    document.title = `${title} | Bookstore`
    },[title])

  return (
    <main className={styles.container}>
      {children}
    </main>
  )
}
export default Layout