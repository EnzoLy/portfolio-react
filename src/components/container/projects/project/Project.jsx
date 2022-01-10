import styles from './styles.module.scss'

export const Project = ({ title, url, imgUrl, recent }) => {
  return (
    <a className={`${styles.project}`} href={url} id={recent ? styles.recent : ''}>
      <img src={imgUrl} alt={`project-img-${title}`} />
      <h2>{title}</h2>
    </a>
  )
}
