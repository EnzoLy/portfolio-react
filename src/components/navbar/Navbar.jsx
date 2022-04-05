import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import { SunIcon } from '../icons/Icons'
import { ThemeContext, themes } from '../../contexts/ThemeContext'

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.items}>
        <Link className={styles.navbar_item} to='/'>Home</Link>
        <Link className={styles.navbar_item} to='/contact'>Contact</Link>
      </div>
      <div className={styles.icon}>
        <ThemeContext.Consumer>
          {({ theme, changeTheme }) => {
            if (theme === themes.dark) {
              return (
                <SunIcon
                  color='#fff' fill='white' onClick={() => changeTheme()}
                />
              )
            } else {
              return (
                <SunIcon
                  color='#000' fill='black' onClick={() => changeTheme()}
                />
              )
            }
          }}
        </ThemeContext.Consumer>
      </div>
    </nav>
  )
}
