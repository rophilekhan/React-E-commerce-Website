import React from 'react';
import Slider from 'react-slick';
import { FaQuoteRight } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa6';

const TestimonialData = [
  {
    id: 1,
    name: 'Sophia Martinez',
    role: 'Fashion Blogger',
    text: 'AuraMart has completely elevated my wardrobe. The fabrics are exceptional, the cut of the ethnic kurtis is so flattering, and shipping arrived 2 days earlier than expected!',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Creative Director',
    text: 'I ordered the resort shirt and denim collection. The stitching details and breathability are top notch. Easily the best online shopping experience I have had this year.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amina Al-Mansoor',
    role: 'Verified Buyer',
    text: 'The colors look even more vibrant in person than on screen! Customer support was super responsive when I had a sizing question. AuraMart is now my go-to boutique.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Reynolds',
    role: 'Stylist',
    text: 'Phenomenal blend of modern streetwear and timeless casual classics. The materials feel substantial and hold their shape after multiple washes.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="testimonials" className="py-16 mb-12 bg-white dark:bg-gray-900 duration-200">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm font-semibold uppercase tracking-wider text-primary">
            What Our Customers Are Saying
          </p>
          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold mt-1 text-gray-900 dark:text-white">
            Customer Testimonials
          </h2>
          <p data-aos="fade-up" className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Real stories from real shoppers who found their signature vibe with AuraMart.
          </p>
        </div>

        {/* testimonial card */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6 px-3">
                <div className="flex flex-col items-center gap-4 shadow-md hover:shadow-xl transition-all duration-300 py-8 px-6 rounded-2xl dark:bg-gray-800 bg-amber-50/40 dark:border dark:border-gray-700 relative overflow-hidden h-full min-h-[290px] justify-between">
                  <div className="flex flex-col items-center gap-3">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-16 h-16 object-cover border-2 border-primary shadow-sm"
                    />
                    <div className="flex gap-1 text-yellow-400 text-xs">
                      {[...Array(data.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 text-center italic relative z-10 line-clamp-4">
                    "{data.text}"
                  </p>

                  <div className="text-center">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white">
                      {data.name}
                    </h3>
                    <p className="text-xs text-primary font-medium">{data.role}</p>
                  </div>

                  <FaQuoteRight className="text-primary/10 dark:text-primary/5 text-6xl absolute top-3 right-3 pointer-events-none" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
