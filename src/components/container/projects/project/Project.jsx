import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'

export const Project = ({ title, url, imgUrl, recent }) => {
  return (
    <div className={`${styles.project}`}>
      <header>
        <h2>{title}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
        </p>
        <div>
          <a href='#'> Visit </a>
        </div>
      </header>
      <a className={styles.icon} href='https://github.com/enzoly' target='_blank' rel='noreferrer'>
        <FaGithub />
      </a>
    </div>
  )
}
