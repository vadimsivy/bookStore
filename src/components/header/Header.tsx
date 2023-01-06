import styles from "./header.module.scss";
import Logo from "./logo/Logo";
import Search from "./search/Search";
import HeaderIcons from "./headerIcons/HeaderIcons";

const Header = () => {
  return(
    <header className={styles.header}>
      <Logo/>
      <Search/>
      <HeaderIcons/>
    </header>
  )
}
export default Header