import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { IoMenu, IoClose } from "react-icons/io5";
import DarkMode from "./DarkMode";
import useCartStore from "../store/useCartStore";

const DropdownLinks = [
  { id: 1, name: "Men",         link: "/shop?category=Men" },
  { id: 2, name: "Women",       link: "/shop?category=Women" },
  { id: 3, name: "Accessories", link: "/shop?category=Accessories" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const cartItems = useCartStore((state) => state.cartItems);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setMobileMenuOpen(false);
    }
  };

  const navLinkClass = ({ isActive }) =>
    `inline-block py-1 px-2 hover:text-primary transition-colors duration-200 ${isActive ? "text-primary font-semibold" : ""}`;

  return (
    <header className="shadow-sm bg-white dark:bg-gray-900 dark:text-white duration-200 sticky top-0 z-40 border-b border-gray-100 dark:border-gray-800">
      {/* Upper Navbar */}
      <div className="bg-primary/20 dark:bg-gray-800/80 backdrop-blur-md py-2.5">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl sm:text-3xl flex items-center gap-2 tracking-tight text-gray-900 dark:text-white">
            <img src={Logo} alt="AuraMart Logo" className="w-9" />
            <span>Aura<span className="text-primary">Mart</span></span>
          </Link>

          {/* Search & Controls */}
          <div className="flex justify-between items-center gap-3 sm:gap-4">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-[180px] group-hover:w-[280px] focus:w-[280px] transition-all duration-300 rounded-full border border-gray-300 dark:border-gray-600 px-4 py-1.5 text-sm focus:outline-none focus:border-primary dark:bg-gray-800 dark:text-white shadow-inner"
              />
              <button type="submit" aria-label="Search">
                <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 text-lg cursor-pointer" />
              </button>
            </form>

            {/* Cart Button */}
            <Link
              to="/cart"
              aria-label={`Cart (${itemCount} items)`}
              className="bg-gradient-to-r from-primary to-amber-600 hover:from-amber-500 hover:to-primary transition-all duration-300 text-white py-1.5 px-4 rounded-full flex items-center gap-2 shadow-md hover:shadow-lg group relative"
            >
              <span className="text-xs sm:text-sm font-medium">Cart</span>
              <FaCartShopping className="text-base text-white drop-shadow-sm cursor-pointer group-hover:scale-110 transition-transform" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow animate-bounce">
                  {itemCount > 99 ? '99+' : itemCount}
                </span>
              )}
            </Link>

            {/* Dark Mode Toggle */}
            <div className="flex items-center">
              <DarkMode />
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden text-2xl text-gray-700 dark:text-gray-200 p-1 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Lower Navbar – Desktop */}
      <nav data-aos="zoom-in" className="hidden sm:flex justify-center py-2.5 bg-white dark:bg-gray-900 shadow-xs">
        <ul className="flex items-center gap-6 text-sm font-medium">
          <li><NavLink to="/" end className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/shop" className={navLinkClass}>Shop</NavLink></li>
          <li><Link to="/#top-products" className="inline-block py-1 px-2 hover:text-primary transition-colors duration-200">Top Rated</Link></li>
          <li><NavLink to="/support" className={navLinkClass}>Support</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>

          {/* Categories Dropdown */}
          <li className="group relative cursor-pointer">
            <span className="flex items-center gap-1 py-1 px-2 hover:text-primary transition-colors duration-200">
              Categories
              <FaCaretDown className="transition-transform duration-200 group-hover:rotate-180 text-xs" />
            </span>
            <div className="absolute top-full left-0 z-50 hidden group-hover:block w-[180px] rounded-xl bg-white dark:bg-gray-800 p-2 shadow-xl border border-gray-100 dark:border-gray-700">
              <ul className="space-y-1">
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <Link
                      to={data.link}
                      className="block w-full rounded-lg px-3 py-2 text-xs hover:bg-primary/10 hover:text-primary dark:text-gray-200 dark:hover:bg-primary/20 transition-colors"
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-4 px-6 shadow-xl">
          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="relative mb-4">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-gray-300 dark:border-gray-600 px-4 py-2 text-sm focus:outline-none focus:border-primary dark:bg-gray-800 dark:text-white"
            />
            <button type="submit">
              <IoMdSearch className="text-gray-500 absolute top-1/2 -translate-y-1/2 right-3 text-lg" />
            </button>
          </form>

          <ul className="space-y-3 font-medium text-sm">
            {[
              { name: 'Home', to: '/', exact: true },
              { name: 'Shop All', to: '/shop' },
              { name: 'Customer Support', to: '/support' },
              { name: 'Contact Us', to: '/contact' },
              { name: 'Cart', to: '/cart' },
            ].map(({ name, to, exact }) => (
              <li key={name}>
                <NavLink
                  to={to}
                  end={exact}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => `block py-1 transition-colors ${isActive ? 'text-primary font-semibold' : 'hover:text-primary'}`}
                >
                  {name}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/#top-products" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-gray-700 dark:text-gray-200 hover:text-primary">
                Top Rated
              </Link>
            </li>
            <li>
              <Link to="/#about" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-gray-700 dark:text-gray-200 hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link to="/#testimonials" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-gray-700 dark:text-gray-200 hover:text-primary">
                Testimonials
              </Link>
            </li>
            <li className="pt-2 border-t border-gray-100 dark:border-gray-800">
              <p className="text-xs uppercase text-gray-400 font-semibold mb-2">Categories</p>
              <div className="pl-2 space-y-2">
                {DropdownLinks.map((data) => (
                  <Link
                    key={data.id}
                    to={data.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs text-gray-600 dark:text-gray-300 hover:text-primary"
                  >
                    {data.name}
                  </Link>
                ))}
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
