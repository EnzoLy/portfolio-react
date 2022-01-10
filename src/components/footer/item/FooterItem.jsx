import styles from './styles.module.scss'

export const FooterItem = ({ title, href, Icon }) => {
  return (
    <a className={styles.footer_item} href={href} target='_blank' rel='noreferrer'>{title}
      <span className={styles.icon}>
        {Icon.map((Icon, index) => <Icon key={index} />)}
      </span>
    </a>
  )
}
