import styles from './styles.module.scss'
import { GitHubIcon, IconByName } from '../../../icons/Icons'
import { ThemeContext, themes } from '../../../../contexts/ThemeContext'

export const Project = ({ title, teconologies, url, description, github }) => {
  return (
    <div
      className={`${styles.project}`}
    >
      <a href={url} target='_blank' rel='noreferrer'>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
          <div className={styles.item}><h3>Made with: </h3></div>
          {
            teconologies.map((teconology, index) => {
              return (
                <div className={styles.item} key={index}>
                  <IconByName name={teconology} />
                </div>
              )
            })
          }
        </div>
      </a>
      <div className={styles.project_footer}>
        <ThemeContext.Consumer>
          {({ theme }) => {
            if (theme === themes.dark) {
              return <GitHubIcon href={github} styles={{ fontSize: '2.5em', marginRight: '10px' }} fill='#fff' />
            } else {
              return <GitHubIcon href={github} styles={{ fontSize: '2.5em', marginRight: '10px' }} fill='black' />
            }
          }}
        </ThemeContext.Consumer>
      </div>
    </div>
  )
}
