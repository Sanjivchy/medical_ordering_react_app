import React from 'react'
import About from '../../components/Home/About'
import Analytics from '../../components/Home/Analytics'
import Cards from '../../components/Home/Cards'
import Contact from '../../components/Home/Contact'
import Footer from '../../components/Home/Footer'
import Hero from '../../components/Home/Hero'
import NavBar from '../../components/Home/NavBar'

function Dashboard() {
  return (
    <div className='bg-black'>
    {/* <div className="text-primary text-[50px]"></div>
    <input type="text" placeholder="Search" /> */}
    <NavBar />
    <Hero />
    <Analytics />
    <About />
    <Contact />
    <Cards />
    <Footer />
  </div>
  )
}

export default Dashboard