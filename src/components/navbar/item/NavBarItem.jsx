import styles from './styles.module.scss'

export const NavBarItem = ({ name, href }) => {
  return <a className={styles.navbar_item} href={href}>{name}</a>
}
