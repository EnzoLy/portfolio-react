import React from 'react'
import ReactDOM from 'react-dom'
import { Container } from './components/container/Container.jsx'
import { Footer } from './components/footer/Footer.jsx'
import { Navbar } from './components/navbar/Navbar.jsx'
import './styles.module.scss'

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Container />
      </main>
      <Footer />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
