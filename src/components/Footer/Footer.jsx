import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGlobe,
  FaLocationArrow,
  FaEnvelope,
  FaPhone,
  FaCode,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  { title: "Home", link: "/" },
  { title: "Shop All Products", link: "/shop" },
  { title: "Customer Support", link: "/support" },
  { title: "Contact Us", link: "/contact" },
];

const SupportLinks = [
  { title: "Track Your Order", link: "/support#tracking" },
  { title: "Shipping Information", link: "/support#shipping" },
  { title: "Returns & Exchanges", link: "/support#returns" },
  { title: "FAQs & Assistance", link: "/support#faq" },
  { title: "Privacy & Protection", link: "/support#privacy" },
];

const SocialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/company/111702501/",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/codes.phinx/",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "https://www.facebook.com/profile.php?id=61582752347805",
  },
  {
    name: "Website",
    icon: FaGlobe,
    url: "https://codesphinx.netlify.app/",
  },
];

const Footer = () => {
  return (
    <footer id="contact" style={BannerImg} className="text-white relative overflow-hidden">
      <div className="bg-black/75 pt-16 pb-8 backdrop-blur-[2px]">
        <div className="container mx-auto px-4">
          <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
            {/* Brand Details & Social Links */}
            <div className="space-y-4">
              <Link to="/" className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
                <img src={footerLogo} alt="AuraMart Logo" className="w-10" />
                <span>Aura<span className="text-primary">Mart</span></span>
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed">
                AuraMart is your premier destination for trend-forward fashion, premium everyday apparel, and high quality lifestyle essentials. Elevate your everyday style.
              </p>

              {/* Functional Social Media Icons */}
              <div className="pt-2">
                <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
                  Connect With Us
                </p>
                <div className="flex items-center gap-3">
                  {SocialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        title={social.name}
                        className="bg-white/10 hover:bg-primary hover:text-white text-gray-200 p-2.5 rounded-full transition-all duration-200 hover:scale-110 shadow-sm"
                      >
                        <IconComponent className="text-lg" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 border-b border-primary/40 pb-2 inline-block">
                Explore AuraMart
              </h3>
              <ul className="flex flex-col gap-2.5 text-sm">
                {FooterLinks.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.link}
                      className="hover:text-primary hover:translate-x-1 duration-200 inline-block text-gray-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Support */}
            <div>
              <h3 className="text-lg font-bold mb-4 border-b border-primary/40 pb-2 inline-block">
                Customer Support
              </h3>
              <ul className="flex flex-col gap-2.5 text-sm">
                {SupportLinks.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.link}
                      className="hover:text-primary hover:translate-x-1 duration-200 inline-block text-gray-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="text-lg font-bold mb-4 border-b border-primary/40 pb-2 inline-block">
                Contact & Support
              </h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <FaLocationArrow className="text-primary text-base mt-1 shrink-0" />
                  <p>Karachi, Pakistan</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-primary text-base shrink-0" />
                  <a href="tel:+923312699111" className="hover:text-primary transition-colors">
                    +92 (33) 12699111
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-primary text-base shrink-0" />
                  <a
                    href="mailto:contact.codesphinx@gmail.com"
                    className="hover:text-primary transition-colors break-all font-medium text-amber-300 hover:underline"
                  >
                    contact.codesphinx@gmail.com
                  </a>
                </div>
                <p className="text-xs text-gray-400 pt-2 border-t border-white/10 mt-2">
                  Operating Hours:<br />
                  Mon – Sat: 9:00 AM – 8:00 PM PKT<br />
                  Sunday: 10:00 AM – 5:00 PM PKT
                </p>
              </div>
            </div>
          </div>

          {/* Developed By codesphinx Credit Card Banner */}
          <div className="my-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0">
                <FaCode className="text-xl" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Developed by <span className="text-primary font-bold">codesphinx</span>
                </p>
                <p className="text-xs text-gray-400">
                  Engineering modern, responsive web and e-commerce solutions.
                </p>
              </div>
            </div>
            <a
              href="https://codesphinx.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white text-xs font-semibold py-2 px-4 rounded-full transition-all duration-200 hover:scale-105 shrink-0 shadow-sm"
            >
              Visit codesphinx <FaArrowUpRightFromSquare className="text-[10px]" />
            </a>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-gray-700/60 pt-6 mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
              <p>© {new Date().getFullYear()} AuraMart, Inc. All rights reserved.</p>
              <span className="hidden sm:inline text-gray-600">•</span>
              <p>
                Crafted with care by{" "}
                <a
                  href="https://codesphinx.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  codesphinx
                </a>
              </p>
            </div>
            <div className="flex gap-4">
              <Link to="/support#privacy" className="hover:text-primary transition-colors">Privacy Notice</Link>
              <span>•</span>
              <Link to="/support#shipping" className="hover:text-primary transition-colors">Shipping Terms</Link>
              <span>•</span>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
