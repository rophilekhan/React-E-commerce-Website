import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6"
import "aos/dist/aos.css"

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic Kurti",
    rating: 5.0,
    color: "White & Gold",
    price: 39.99,
    originalPrice: 59.99,
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Western Floral Dress",
    rating: 4.5,
    color: "Crimson Red",
    price: 49.99,
    originalPrice: 69.99,
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Retro Sun Goggles",
    rating: 4.7,
    color: "Amber Brown",
    price: 24.99,
    originalPrice: 34.99,
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Casual Printed T-Shirt",
    rating: 4.4,
    color: "Mustard Yellow",
    price: 29.99,
    originalPrice: 39.99,
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Chic Summer Tunic",
    rating: 4.6,
    color: "Blush Pink",
    price: 44.99,
    originalPrice: 59.99,
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div id="products" className="py-14 bg-gray-50/50 dark:bg-gray-900/50 duration-200">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm font-semibold uppercase tracking-wider text-primary">
            Top Selling Products For You
          </p>
          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold mt-1">
            Featured Products
          </h2>
          <p data-aos="fade-up" className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Handpicked trends with premium quality, sustainable materials, and modern silhouettes.
          </p>
        </div>

        {/* products grid */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 place-items-stretch">
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="group bg-white dark:bg-gray-800 rounded-xl p-3 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between border border-gray-100 dark:border-gray-700"
              >
                <div className="overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700/50 relative">
                  <img
                    src={data.img}
                    alt={data.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = 'https://placehold.co/600x800/f3f4f6/6b7280?text=Product';
                    }}
                    className="h-[200px] sm:h-[220px] w-full object-cover object-top group-hover:scale-105 duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-primary/90 text-white text-xs font-semibold px-2 py-0.5 rounded-full backdrop-blur-sm">
                    Sale
                  </div>
                </div>
                <div className="pt-3 space-y-1">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100 line-clamp-1 group-hover:text-primary transition-colors">
                    {data.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {data.color}
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-gray-900 dark:text-white">
                        ${data.price}
                      </span>
                      {data.originalPrice && (
                        <span className="text-xs text-gray-400 line-through">
                          ${data.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-amber-500 font-medium">
                      <FaStar className="text-yellow-400" />
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* view all button */}
          <div className="flex justify-center mt-10">
            <button className="cursor-pointer bg-primary hover:bg-secondary text-white font-medium py-2.5 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-200">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products