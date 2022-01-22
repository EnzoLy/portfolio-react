import style from './styles.module.scss'
import emailjs from 'emailjs-com'
import { useState } from 'react'

const EmailSendedComponent = () => {
  return (
    <div className={style.email_sended}>
      <h3>
        <span> Thank you for send mail! </span>
      </h3>
    </div>
  )
}

const EmailSendingComponent = () => {
  return (
    <div className={style.email_sended}>
      <h3>
        <span> Sending... </span>
      </h3>
    </div>
  )
}

const EmailErrorComponent = ({ error }) => {
  return (
    <div className={style.email_error}>
      <h3>
        <span> Error: {error} </span>
        <span> Please contact with developer </span>
      </h3>
    </div>
  )
}

export const Contact = () => {
  const [emailSend, setEmailSend] = useState(false)
  const [emailError, setEmailError] = useState(null)
  const [sending, setSending] = useState(false)

  function onSubmit (event) {
    event.preventDefault()

    setEmailError(null)
    setSending(true)

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID_EMAILJS, import.meta.env.VITE_TEMPLATE_ID_EMAILJS, event.target, import.meta.env.VITE_USER_ID_EMAILJS)
      .then((result) => {
        setSending(false)
        setEmailSend(true)
        if (result.text === 'OK') {
          setTimeout(() => {
            setEmailSend(false)
          }, 4000)
        }
      }, (error) => {
        setSending(false)
        setEmailSend(error.text)
      })
  }

  return (
    <section id='contact' className={style.contact_container} onSubmit={onSubmit}>
      {
        emailError ? <EmailErrorComponent error={emailError} /> : null
      }
      {
        sending
          ? <EmailSendingComponent />
          : emailSend
            ? <EmailSendedComponent />
            : (
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
              )
      }
    </section>
  )
}
