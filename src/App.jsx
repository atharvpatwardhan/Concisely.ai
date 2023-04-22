import Home from './components/Home'
import Article from './components/Article'
import './App.css'
import Navbar from './components/Navbar'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Article />  
      <Footer />
    </div>
  )
}

export default App