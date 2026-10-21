import React, { useState } from 'react'; 
import LightButton from "../assets/website/light-mode-button.png";
import DarkButton from "../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  
  React.useEffect(()=> {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark")
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light")
    }
  } , [theme]);


  return (
    <div className='relative flex items-center'>
      <img
        src={LightButton}
        alt="Switch to Dark Mode"
        title="Switch to Dark Mode"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />
      <img
        src={DarkButton}
        alt="Switch to Light Mode"
        title="Switch to Light Mode"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
      />
    </div>
  )
}

export default DarkMode;