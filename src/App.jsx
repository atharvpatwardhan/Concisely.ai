import Hero from './components/Hero'
import Demo from './components/Demo'
import './App.css'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Demo />  
      <Footer />
    </div>
  )
}

export default App