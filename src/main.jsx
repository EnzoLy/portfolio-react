import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Contact } from './components/contact/Contact.jsx'
import { Container } from './components/container/Container.jsx'
import { Footer } from './components/footer/Footer.jsx'
import { Navbar } from './components/navbar/Navbar.jsx'
import './styles.module.scss'

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
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
