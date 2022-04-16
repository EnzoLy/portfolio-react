import { ThemeContext, themes } from '../../../contexts/ThemeContext'
import styles from './styles.module.scss'

export const FooterItem = ({ title, href, Icon }) => {
  return (
    <div className={styles.footer_item_container}>
      <div className={styles.footer_item}>{title}</div>
      <div className={styles.icons}>
        {Icon.map((Icon, index) => {
          return (
            <div key={index} className={styles.footer_item}>
              <ThemeContext.Consumer>
                {({ theme }) => {
                  if (theme === themes.dark) {
                    return <Icon width='24px' height='24px' href={href} styles={{ marginRight: '0', marginLeft: '0' }} fill='white' />
                  } else {
                    return <Icon width='24px' height='24px' href={href} styles={{ marginRight: '0', marginLeft: '0' }} fill='black' />
                  }
                }}
              </ThemeContext.Consumer>

            </div>
          )
        })}
      </div>
    </div>
  )
}
