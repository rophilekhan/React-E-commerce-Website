import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';

const Layout = () => {
  const location = useLocation();
  // Hide footer on checkout and order confirmed for a cleaner flow
  const hideFooter = ['/checkout', '/order-confirmed'].includes(location.pathname);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
