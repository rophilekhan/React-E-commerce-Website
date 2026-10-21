import React from 'react';
import BannerImg from '../../assets/women/women2.jpg';
import { GrSecure } from 'react-icons/gr';
import { FaTruckFast } from 'react-icons/fa6';
import { MdPayment, MdLocalOffer } from 'react-icons/md';

const Banner = () => {
  return (
    <div id="about" className="min-h-[550px] flex justify-center items-center py-16 bg-gray-50 dark:bg-gray-950 duration-200">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          {/* image section */}
          <div data-aos="zoom-in" className="flex justify-center">
            <img
              src={BannerImg}
              alt="AuraMart Winter Collection"
              className="max-w-[420px] h-[360px] w-full mx-auto rounded-2xl shadow-2xl object-cover object-top"
            />
          </div>
          {/* text details section */}
          <div data-aos="fade-up" className="flex flex-col justify-center gap-6">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Limited Time Promo
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-1 text-gray-900 dark:text-white">
                Winter Sale Up to 50% Off
              </h2>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300 tracking-wide leading-relaxed">
              Experience unparalleled style with our handpicked winter curation. Crafted with premium wool blends, breathable cottons, and weather-resistant finishes tailored for every occasion.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div data-aos="fade-up" data-aos-delay="100" className="flex items-center gap-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <GrSecure className="text-2xl h-10 w-10 p-2 rounded-full bg-violet-100 text-violet-600 dark:bg-violet-900/50 dark:text-violet-300" />
                <span className="font-medium text-sm">Quality Products</span>
              </div>

              <div data-aos="fade-up" data-aos-delay="200" className="flex items-center gap-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <FaTruckFast className="text-2xl h-10 w-10 p-2 rounded-full bg-yellow-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-300" />
                <span className="font-medium text-sm">Fast Delivery</span>
              </div>

              <div data-aos="fade-up" data-aos-delay="300" className="flex items-center gap-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <MdPayment className="text-2xl h-10 w-10 p-2 rounded-full bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300" />
                <span className="font-medium text-sm">Easy Payment</span>
              </div>

              <div data-aos="fade-up" data-aos-delay="400" className="flex items-center gap-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <MdLocalOffer className="text-2xl h-10 w-10 p-2 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-300" />
                <span className="font-medium text-sm">Exclusive Offers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
