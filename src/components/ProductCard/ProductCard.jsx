import React from 'react';
import { FaStar, FaCartPlus } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../../store/useCartStore';

const tagColors = {
  'Best Seller': 'bg-emerald-500',
  'Trending': 'bg-blue-500',
  'New Arrival': 'bg-violet-500',
  'Sale': 'bg-rose-500',
  'Hot Pick': 'bg-orange-500',
  'Premium': 'bg-amber-600',
};

const ProductCard = ({ product, aosDelay = '0' }) => {
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, product.sizes?.[0] || null, 1);
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const tagColor = tagColors[product.tag] || 'bg-primary';
  const discountPct = product.discount
    ? product.discount
    : product.originalPrice && product.originalPrice > product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      onClick={handleCardClick}
      className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100 dark:border-gray-700 cursor-pointer overflow-hidden"
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-700/50">
        <img
          src={product.image}
          alt={product.title}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = 'https://placehold.co/600x800/f3f4f6/6b7280?text=Product+Image';
          }}
          className="h-[220px] w-full object-cover object-top group-hover:scale-105 duration-500"
        />
        {/* Tag */}
        {product.tag && (
          <span className={`absolute top-2 left-2 ${tagColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full`}>
            {product.tag}
          </span>
        )}
        {/* Discount */}
        {discountPct > 0 && (
          <span className="absolute top-2 right-2 bg-rose-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            -{discountPct}%
          </span>
        )}
        {/* Add to Cart overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={handleAddToCart}
            className="bg-primary hover:bg-secondary text-white font-semibold text-sm py-2 px-5 rounded-full flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <FaCartPlus />
            Add to Cart
          </button>
        </div>
        {/* Out of stock */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="bg-white text-gray-800 font-bold text-xs px-4 py-1.5 rounded-full">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-4 flex flex-col gap-1 flex-1">
        <p className="text-xs text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wider">
          {product.subcategory}
        </p>
        <h3 className="font-semibold text-gray-800 dark:text-gray-100 line-clamp-1 group-hover:text-primary transition-colors text-sm sm:text-base">
          {product.title}
        </h3>
        <p className="text-xs text-gray-400 dark:text-gray-500">{product.color}</p>

        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-gray-900 dark:text-white text-base">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold">
            <FaStar className="text-yellow-400" />
            <span>{product.rating}</span>
            <span className="text-gray-400 font-normal">({product.reviews})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
