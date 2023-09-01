import About from './sections/About/About'
import Projects from './sections/Projects/Projects'
import Contact from './sections/Contact/Contact'
import Footer from './layouts/Footer'
import Bio from './sections/Bio/Bio'
import Header from './layouts/Header'
import Timeline from './sections/Timeline/Timeline'
import './App.css'
import ScrollToTheTop from './components/ScrollToTheTop'
import ArrowIcon from './components/Icons/ArrowIcon'

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

      <ScrollToTheTop scrollPosition={1500}>
        <ArrowIcon />
      </ScrollToTheTop>
    </div>
  )
}

export default App
