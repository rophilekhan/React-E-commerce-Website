import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/hero'
import Products from './components/Products/Products'
import AOS from "aos";
import TopProducts from './components/TopProducts/TopProducts';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Testmonials from './components/Testmonials/Testmonials';

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
      <Banner />
      <Subscribe />
      <Products />
      <Testmonials />
    </div>
  )
}

export default App