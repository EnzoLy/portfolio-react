import style from './styles.module.scss'
import avatarURL from '../../../assets/img/avatar.jpg'

export const AboutMe = () => {
  return (
    <header className={style.aboutme} id='aboutme'>
      <img src={avatarURL} alt='avatar' />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint odit officia nemo nulla molestiae inventore nihil delectus dolorum, recusandae nisi eligendi aspernatur eum illo amet asperiores, a laboriosam. Voluptas, numquam.</p>
    </header>
  )
}
