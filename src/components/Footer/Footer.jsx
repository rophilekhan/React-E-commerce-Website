import React from "react";
import footerLogo from "../../assets/logo.png"; // Update the path based on your project structure
import Banner from "../../assets/website/footer-pattern.jpg"; // Update the banner path
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

// Footer background styling with the pattern
const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white mb-20">
      <div className="container mx-auto">
        <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-44 pt-5">
          
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Shopsy Logo" className="max-w-[50px]" />Shopsy
            </h1>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis itaque sequi ipsa! Aliquam, praesentium maxime!
            </p>
          </div>

          {/* Footer Links */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
            <ul className="flex flex-col gap-3">
              {FooterLinks.map((link) => (
                <li
                  className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                  key={link.title}
                >
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links and Contact */}
          <div className="py-8 px-4">
            <div className="flex items-center gap-3 mb-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-3 mb-3">
                <FaLocationArrow className="text-2xl" />
                <p>North Karachi, Pakistan</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMobileAlt className="text-2xl" />
                <p>+92 3102699373</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
