import styles from "./Header.module.scss"
import Logo from "./logo/Logo"
import Search from "./search/Search"
import HeaderIcons from "./headerIcons/HeaderIcons"
import useViewport from "../../hooks/useViewport"

const Header = () => {
  const viewport = useViewport()

  return(
    <header className={styles.header}>
      <Logo/>
      {viewport.laptop && <Search/>}
      <HeaderIcons/>

    </header>
  )
}
export default Header