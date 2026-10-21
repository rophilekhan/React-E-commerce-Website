import React from 'react'
import Img1 from "../../assets/shirts/shirt.png"
import Img2 from "../../assets/shirts/shirt2.png"
import Img3 from "../../assets/shirts/shirt3.png"
import { FaStar } from "react-icons/fa6"


const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Denim Shirt",
    price: 34.99,
    rating: 4.9,
    description: "Ultra-breathable premium cotton denim shirt tailored for a relaxed, sharp casual look.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Resort Shirt",
    price: 29.99,
    rating: 4.8,
    description: "Vibrant tropical botanical pattern shirt with lightweight rayon fabric perfect for summer vibes.",
  },
  {
    id: 3,
    img: Img3,
    title: "Embroidered Women Shirt",
    price: 39.99,
    rating: 5.0,
    description: "Finely embroidered mandarin collar shirt blending minimalist aesthetics with modern chic style.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div id="top-products" className="py-20 bg-white dark:bg-gray-900 duration-200">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-28 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm font-semibold uppercase tracking-wider text-primary">
            Top Rated Products For You
          </p>
          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold mt-1">
            Best Products
          </h2>
          <p data-aos="fade-up" className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Handcrafted luxury pieces voted highest by our community for durability and style.
          </p>
        </div>

        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24 sm:gap-10 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/90 dark:hover:bg-primary hover:text-white relative shadow-xl hover:shadow-2xl duration-300 group max-w-[320px] w-full pt-16 pb-6 px-6 text-center border border-gray-100 dark:border-gray-700 hover:border-transparent transition-all"
            >
              {/* image section */}
              <div className="h-[100px] flex justify-center">
                <img
                  src={data.img}
                  alt={data.title}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://placehold.co/600x800/f3f4f6/6b7280?text=Product';
                  }}
                  className="max-w-[140px] block mx-auto transform -translate-y-28 group-hover:scale-110 duration-300 drop-shadow-lg"
                />
              </div>

              {/* details section */}
              <div className="space-y-3">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <span className="text-xs ml-1 font-semibold text-gray-600 dark:text-gray-300 group-hover:text-white">
                    ({data.rating})
                  </span>
                </div>

                <h3 className="text-xl font-bold transition-colors">
                  {data.title}
                </h3>

                <p className="text-primary font-bold text-lg group-hover:text-white transition-colors">
                  ${data.price}
                </p>

                <p className="text-gray-500 dark:text-gray-300 group-hover:text-white/90 duration-300 text-xs leading-relaxed line-clamp-2">
                  {data.description}
                </p>

                <div>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white font-medium py-2 px-6 rounded-full mt-2 group-hover:bg-white group-hover:text-primary shadow-sm hover:shadow"
                    onClick={handleOrderPopup}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts