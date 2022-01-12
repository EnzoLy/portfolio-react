import styles from './styles.module.scss'
import { GitHubIcon, IconByName } from '../../../icons/Icons'

export const Project = ({ title, teconologies, url }) => {
  return (
    <div className={`${styles.project}`}>
      <a href={url} target='_blank' rel='noreferrer'>
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
      </a>
      <footer><GitHubIcon href='https://github.com/enzoly' styles={{ fontSize: '2.5em', marginRight: '10px' }} /></footer>
    </div>
  )
}
