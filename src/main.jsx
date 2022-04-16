import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Contact } from './components/contact/Contact.jsx'
import { Container } from './components/container/Container.jsx'
import { Footer } from './components/footer/Footer.jsx'
import { Navbar } from './components/navbar/Navbar.jsx'
import ThemeContextWrapper from './contexts/ThemeContextWrapper.jsx'
import './styles.module.scss'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <>
      <main>
        <Container />
      </main>
    </>
  )
}

const ContactPage = () => {
  return (
    <>
      <main>
        <Contact />
      </main>
    </>
  )
}

const App = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Enzo Loyola</title>
        <meta name='description' content='Enzo Loyola Portfolio' />
      </Helmet>
      <Navbar />
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </>
      <Footer />
    </>
  )
}

createRoot(
  document.getElementById('root')
).render(
  <BrowserRouter>
    <ThemeContextWrapper>
      <App />
    </ThemeContextWrapper>
  </BrowserRouter>
)
