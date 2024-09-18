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
import Popup from './components/Popup/Popup';

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
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

      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup}/>
      <Banner />
      <Subscribe />
      <Testmonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default App