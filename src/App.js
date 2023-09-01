import Footer from './layouts/Footer'
import Header from './layouts/Header'
import './App.css'
import ScrollToTheTop from './components/ScrollToTheTop'
import ArrowIcon from './components/Icons/ArrowIcon'
import Body from './layouts/Body'

const App = () => {
  return (
    <div id='top'>
      

      <main>
        <Header />
        <Body />
        <Footer />
      </main>

      <ScrollToTheTop scrollPosition={1500}>
        <ArrowIcon />
      </ScrollToTheTop>
    </div>
  )
}

export default App
