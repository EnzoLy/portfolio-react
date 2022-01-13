import style from './styles.module.scss'
import avatarURL from '../../../assets/img/avatar.jpg'

export const AboutMe = () => {
  return (
    <header className={style.aboutme} id='aboutme'>
      <div>
        <img src={avatarURL} alt='avatar' width='100px' className={style.aboutmeImage} />
      </div>
      <div className={style.aboutmeText}>
        <span>My name is Enzo Loyola I currently live in Argentina. I am a Full-Stack developer.</span>
        <span>My principal skills are: <span className={style.js}>JavaScript</span>, <span className={style.react}>React</span>, <span className={style.node}>NodeJs</span>, <span className={style.express}>ExpressJs</span>, <span className={style.mongodb}>MongoDB</span>, <span className={style.java}>Java</span> and <span className={style.kotlin}>Kotlin</span>.
        </span>
        <span>And now I'm current learning: <span className={style.nextjs}>NextJs</span>, <span className={style.firebase}>Firebase</span> and <span className={style.redux}>Redux</span>.</span>
      </div>
    </header>
  )
}
