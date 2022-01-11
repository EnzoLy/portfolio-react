import styles from './styles.module.scss'
import { ReactIcon, ViteIcon, NextJsIcon, GitHubIcon } from '../../../icons/Icons'

export const Project = ({ title, url }) => {
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
          <div className={styles.item}><ReactIcon /></div>
          <div className={styles.item}><ViteIcon /></div>
          <div className={styles.item}><NextJsIcon /></div>
        </div>
        <a href='#' className={styles.visit}> Visit </a>
      </header>
      <footer><GitHubIcon href='https://github.com/enzoly' styles={{ marginTop: '100px' }} /></footer>
    </div>
  )
}
