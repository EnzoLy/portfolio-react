import { scrollTo } from '../../../helpers/Scroll'
import styles from './styles.module.scss'

export const NavBarItem = ({ name, href }) => {
  const onClick = () => {
    scrollTo(href)
  }
  return <a className={styles.navbar_item} onClick={onClick}>{name}</a>
}
