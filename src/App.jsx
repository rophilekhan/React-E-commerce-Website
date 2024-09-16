import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/hero'
import Products from './components/Products/Products'
import AOS from "aos";
import TopProducts from './components/TopProducts/TopProducts';

const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset:100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100
    })
  })

  return (
    <div>

      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
    </div>
  )
}

export default App