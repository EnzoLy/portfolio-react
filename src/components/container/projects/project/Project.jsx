import styles from './styles.module.scss'
import { GitHubIcon, IconByName } from '../../../icons/Icons'

export const Project = ({ title, url, teconologies }) => {
  console.log(window.matchMedia('(min-width: 1288px)').matches)

  return (
    <div className={`${styles.project}`}>
      <header>
        <h2>{title}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
        </p>
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
        <a href='#' className={styles.visit}> Visit </a>
      </header>
      <footer><GitHubIcon href='https://github.com/enzoly' styles={{ fontSize: '2.5em' }} /></footer>
    </div>
  )
}
