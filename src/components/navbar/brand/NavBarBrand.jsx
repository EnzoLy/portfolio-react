import styles from './styles.module.scss'

export const NavBarBrand = ({ name, href }) => <a className={styles.navbar_brand} href={href}>{name}</a>
