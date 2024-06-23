import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from "./components/Hero.jsx"
import Feature from './components/Feature.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar />
  
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <Hero />
      </div>
      <Feature />
   
   
   
   
   </>
  )
}

export default App
