import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
        <Navbar/>
<HeroSection/>
<About/>
<Services/>
<Portfolio/>
<Contact/>
<Footer/>
    </div>
  )
}

export default App