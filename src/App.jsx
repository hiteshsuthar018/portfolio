import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  

  return (
    <div className='flex flex-col gap-9 scroll-smooth'>
    <Navbar/>
    <About />
    <Services/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
