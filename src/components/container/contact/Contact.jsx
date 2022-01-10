import style from './styles.module.scss'

export const Contact = () => {
  return (
    <section id='#contact' className={style.contact_container}>
      <h2>Contact</h2>
      <form className={style.contact}>
        <span>Email </span>
        <input type='email' name='email' placeholder='Email' />
        <span>Message </span>
        <textarea name='message' placeholder='Message' />
        <button type='submit'>Send</button>
      </form>
    </section>
  )
}
