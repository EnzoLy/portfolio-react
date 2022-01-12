import styles from './styles.module.scss'
import { NavBarItem } from './item/NavBarItem'
import { NavBarBrand } from './brand/NavBarBrand'

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavBarBrand name='Logo' href='/' />
      <NavBarItem name='About Me' href='aboutme' />
      <NavBarItem name='Projects' href='projects' />
      <NavBarItem name='Contact' href='contact' />
    </nav>
  )
}
