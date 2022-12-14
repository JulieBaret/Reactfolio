import About from './components/About/About'
import Projects from './components/Projects/Projects'
import UpToTop from './components/UpToTop/UpToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Bio from './components/Bio/Bio'
import Header from './components/Header/Header'
import Timeline from './components/Timeline/Timeline'
import './App.css'

const App = () => {
  return (
    <div id='top'>
      

      <main>
        <Header />
        <About />
        <Projects />
        <Bio />
        <Timeline />
        <Contact />
        <Footer />
      </main>

      <UpToTop />
    </div>
  )
}

export default App
