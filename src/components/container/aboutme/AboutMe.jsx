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
        <span>My name is Enzo Loyola,</span>
        <span>I am a Full-Stack developer from Argentina.</span>
        <br />
        <div className={style.skills}>
          <span>My principal skills are:</span>
          <div>
            <span style={{ borderBottom: '3px solid #efd81d' }}>JavaScript</span>
            <span style={{ borderBottom: '3px solid #61dafb' }}>React</span>
            <span style={{ borderBottom: '3px solid #5d9353' }}>NodeJs</span>
            <span style={{ borderBottom: '3px solid #3f3f3f' }}>ExpressJs</span>
            <span style={{ borderBottom: '3px solid #0fa54d' }}>MongoDB</span>
            <span style={{ borderBottom: '3px solid #cc0001' }}>Java</span>
            <span style={{ borderBottom: '3px solid #7f52ff' }}>Kotlin</span>
            <span style={{ borderBottom: '3px solid #000' }}>NextJs</span>
          </div>
        </div>
        <br />
        <div className={style.skills}>
          <span>And now I'm current learning:</span>
          <div>
            <span style={{ borderBottom: '3px solid #ff0000' }}>Firebase</span>
            <span style={{ borderBottom: '3px solid #E535AB' }}>GraphQL</span>
            <span style={{ borderBottom: '3px solid #2F74C0' }}>TypeScript</span>
          </div>
        </div>
      </div>
    </header>
  )
}
