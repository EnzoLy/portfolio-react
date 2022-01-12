import { FooterItem } from './item/FooterItem'
import styles from './styles.module.scss'
import { GitHubIcon, ReactIcon, ViteIcon } from '../icons/Icons'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterItem title='Site made with React and Vite' Icon={[ReactIcon, ViteIcon]} />
      <FooterItem title='Repository' href='https://github.com/EnzoLy' Icon={[GitHubIcon]} />
    </footer>
  )
}
