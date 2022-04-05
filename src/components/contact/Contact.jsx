import style from './styles.module.scss'
import emailjs from 'emailjs-com'
import { useState } from 'react'

const EMAIL_STATE = {
  SENDING: 'Thank you for send mail!',
  SENDED: 'Sending...',
  NONE: 'NONE'
}
export const Contact = () => {
  const [emailState, setEmailState] = useState(EMAIL_STATE.NONE)

  function onSubmit (event) {
    event.preventDefault()

    setEmailState(EMAIL_STATE.SENDING)

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID_EMAILJS,
        import.meta.env.VITE_TEMPLATE_ID_EMAILJS,
        event.target,
        import.meta.env.VITE_USER_ID_EMAILJS
      )
      .then(
        (result) => {
          if (result.text === 'OK') {
            setEmailState(EMAIL_STATE.SENDED)
            setTimeout(() => {
              setEmailState(EMAIL_STATE.NONE)
            }, 4000)
          }
        },
        (error) => {
          console.log(error.text)
          setEmailState(EMAIL_STATE.ERROR)
        }
      )
  }

  return (
    <section
      id='contact'
      className={style.contact_container}
      onSubmit={onSubmit}
    >
      {emailState !== EMAIL_STATE.NONE && (
        <div className={style.email_sended}>
          <h3>
            <span> {emailState} </span>
          </h3>
        </div>
      )}
      {emailState === EMAIL_STATE.NONE && (
        <div>
          <h2>CONTACT</h2>
          <form className={style.contact}>
            <span>Email </span>
            <input type='email' name='email' placeholder='Email' required />
            <span>Message </span>
            <textarea name='message' placeholder='Message' required />
            <button type='submit'>Send</button>
          </form>
        </div>
      )}
    </section>
  )
}
