import style from './styles.module.scss'
import avatarURL from '../../../assets/img/avatar.jpg'

export const AboutMe = () => {
  return (
    <header className={style.aboutme} id='aboutme'>
      <div>
        <img
          src={avatarURL}
          alt='avatar'
          width='100px'
          className={style.aboutmeImage}
        />
      </div>
      <div className={style.aboutmeText}>
        <span>
          My name is Enzo Loyola I am a Full-Stack developer from Argentina.
        </span>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
          reiciendis sequi natus
        </span>
        <br />
        <div className={style.skills}>
          <span>My principal skills are:</span>
          <div>
            <span className={style.js}>JavaScript</span>
            <span className={style.react}>React</span>
            <span className={style.node}>NodeJs</span>
            <span className={style.express}>ExpressJs</span>
            <span className={style.mongodb}>MongoDB</span>
            <span className={style.java}>Java</span>
            <span className={style.kotlin}>Kotlin</span>
          </div>
        </div>
        <br />
        <div className={style.skills}>
          <span>And now I'm current learning:</span>
          <div>
            <span className={style.nextjs}>NextJs</span>
            <span className={style.firebase}>Firebase</span>
          </div>
        </div>
      </div>
    </header>
  )
}
