import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/hero'
import Products from './components/Products/Products'
import AOS from "aos";
import TopProducts from './components/TopProducts/TopProducts';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Testmonials from './components/Testmonials/Testmonials';
import Footer from './components/Footer/Footer';

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
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>

      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Products />
      <Testmonials />
      <Footer />
    </div>
  )
}

export default App