import { Projects } from './projects/Projects'
import { AboutMe } from './aboutme/AboutMe'
import styles from './styles.module.scss'

export const Container = () => {
  return (
    <div className={styles.flex_container}>
      <article className={styles.flex_item}>
        <AboutMe />
      </article>
      <article className={styles.flex_item}>
        <Projects />
      </article>
    </div>
  )
}
