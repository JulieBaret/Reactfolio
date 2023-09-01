import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Bio from './components/Bio/Bio'
import Header from './components/Header/Header'
import Timeline from './components/Timeline/Timeline'
import './App.css'
import ScrollToTheTop from './components/ScrollToTheTop/ScrollToTheTop'
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
