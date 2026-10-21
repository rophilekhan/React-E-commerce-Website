import React from 'react';
import Image1 from '../../assets/hero/women.png';
import Image2 from '../../assets/hero/shopping.png';
import Image3 from '../../assets/hero/sale.png';
import Slider from 'react-slick';

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Up to 50% Off On Women's Ethnic Wear",
    description:
      "Discover the latest artisanal kurtis, embroidered dresses, and handcrafted ethnic styles designed for everyday grace and celebration.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% Off On Western Collection",
    description:
      "Upgrade your wardrobe with contemporary styles, premium denim, casual chic tops, and statement workwear with unmatched comfort.",
  },
  {
    id: 3,
    img: Image3,
    title: "Mega Season Sale: Up to 70% Off",
    description:
      "Huge discounts across top categories. Grab the hottest trends in men's, women's, and accessories before stock runs out!",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-0 pointer-events-none"></div>

      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-lg mx-auto sm:mx-0"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="200"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-amber-600 hover:scale-105 transition-transform duration-200 text-white font-medium py-2.5 px-6 rounded-full shadow-md hover:shadow-lg inline-flex items-center gap-2"
                    >
                      Order Now
                    </button>
                  </div>
                </div>

                {/* image section */}
                <div className="order-1 sm:order-2 flex justify-center items-center">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt={data.title}
                      className="w-[280px] h-[280px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_12px_rgba(0,0,0,0.15)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
