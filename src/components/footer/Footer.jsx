import { FooterItem } from './item/FooterItem'
import styles from './styles.module.scss'
import { FaGithub, FaReact } from 'react-icons/fa'
import { SiVite } from 'react-icons/si'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterItem title='Made with React and Vite' href='https://vitejs.dev/guide/' Icon={[FaReact, SiVite]} />
      <FooterItem title='Repository' href='https://github.com/EnzoLy' Icon={[FaGithub]} />
    </footer>
  )
}
