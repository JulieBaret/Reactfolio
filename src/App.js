import About from './components/About/About'
import Projects from './components/Projects/Projects'
import UpToTop from './components/UpToTop/UpToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Bio from './components/Bio/Bio'
import Header from './components/Header/Header'
import './App.css'
// import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div id='top'>
      <Header />

      <main>
        <About />
        <Projects />
        <Bio />
        <Contact />
      </main>

      <UpToTop />
      <Footer />
    </div>
  )
}

export default App
