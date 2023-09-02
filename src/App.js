import Footer from './layouts/Footer'
import Header from './layouts/Header'
import ScrollToTheTop from './components/ScrollToTheTop'
import ArrowIcon from './components/Icons/ArrowIcon'
import Body from './layouts/Body'

const App = () => {
  return (
    <div id='top' className='flex flex-col justify-items-center'>
      <Header />
      <Body />
      <Footer />
      <ScrollToTheTop scrollPosition={1500}>
        <ArrowIcon />
      </ScrollToTheTop>
    </div>
  )
}

export default App
