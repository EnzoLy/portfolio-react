import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.navbar_item} to='/'>Home</Link>
      <Link className={styles.navbar_item} to='/contact'>Contact</Link>
    </nav>
  )
}
