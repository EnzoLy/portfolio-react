import styles from './styles.module.scss'

export const FooterItem = ({ title, href, Icon }) => {
  return (
    <div className={styles.footer_item_container}>
      <div className={styles.footer_item}><a href={href} target='_blank' rel='noreferrer'>{title}</a></div>
      {Icon.map((Icon, index) => {
        return (
          <div key={index} className={styles.footer_item}>
            <Icon href={href} styles={{ marginRight: '0', marginLeft: '0' }} />
          </div>
        )
      })}
    </div>
  )
}
