import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaStar, FaCartPlus, FaArrowLeft, FaHeart, FaShare } from 'react-icons/fa6';
import { FaTruckFast } from 'react-icons/fa6';
import { GrSecure } from 'react-icons/gr';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard/ProductCard';
import useCartStore from '../store/useCartStore';

const tagColors = {
  'Best Seller': 'bg-emerald-500',
  'Trending': 'bg-blue-500',
  'New Arrival': 'bg-violet-500',
  'Sale': 'bg-rose-500',
  'Hot Pick': 'bg-orange-500',
  'Premium': 'bg-amber-600',
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);

  const product = productsData.find((p) => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || null);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [addedFeedback, setAddedFeedback] = useState(false);

  React.useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes?.[0] || null);
      setActiveImage(0);
      setQuantity(1);
      setAddedFeedback(false);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-gray-500">
        <p className="text-5xl">😕</p>
        <p className="text-xl font-semibold">Product not found</p>
        <Link to="/shop" className="text-primary underline text-sm">Back to Shop</Link>
      </div>
    );
  }

  const related = productsData.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const tagColor = tagColors[product.tag] || 'bg-primary';

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} className={i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'} />
    ));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 duration-200">
      {/* Breadcrumb */}
      <div className="border-b border-gray-100 dark:border-gray-800">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
            <span>/</span>
            <Link to={`/shop?category=${product.category}`} className="hover:text-primary transition-colors">{product.category}</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium truncate">{product.title}</span>
          </nav>
        </div>
      </div>

      <div className="container py-10">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors mb-8 group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img
                src={product.images?.[activeImage] || product.image}
                alt={product.title}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://placehold.co/600x800/f3f4f6/6b7280?text=Product+Image';
                }}
                className="w-full h-[450px] sm:h-[550px] object-cover object-top"
              />
              {product.tag && (
                <span className={`absolute top-4 left-4 ${tagColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {product.tag}
                </span>
              )}
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-2xl">
                  <span className="bg-white text-gray-800 font-bold px-6 py-2 rounded-full">Out of Stock</span>
                </div>
              )}
            </div>
            {/* Thumbnails */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`rounded-xl overflow-hidden border-2 transition-all duration-200 ${activeImage === idx ? 'border-primary shadow-md' : 'border-gray-200 dark:border-gray-700'}`}
                  >
                    <img
                      src={img}
                      alt={`View ${idx + 1}`}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = 'https://placehold.co/600x800/f3f4f6/6b7280?text=Product';
                      }}
                      className="w-20 h-20 object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-5">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider">{product.subcategory}</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-1">{product.title}</h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">{renderStars(product.rating)}</div>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{product.rating}</span>
              <span className="text-sm text-gray-400">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-end gap-3">
              <span className="text-4xl font-extrabold text-gray-900 dark:text-white">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                  <span className="text-sm bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-300 font-bold px-2 py-0.5 rounded-full">
                    {product.discount}% OFF
                  </span>
                </>
              )}
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{product.description}</p>

            <div className="h-px bg-gray-100 dark:bg-gray-800" />

            {/* Color */}
            <div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Color: <span className="font-normal text-gray-500">{product.color}</span></p>
            </div>

            {/* Size */}
            {product.sizes && product.sizes.length > 0 && product.sizes[0] !== 'One Size' && (
              <div>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Select Size:</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-xl border-2 text-sm font-semibold transition-all duration-200 ${
                        selectedSize === size
                          ? 'border-primary bg-primary text-white shadow-md'
                          : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Quantity:</p>
              <div className="flex items-center gap-3">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-lg hover:border-primary hover:text-primary transition-colors">−</button>
                <span className="w-10 text-center font-bold text-lg text-gray-900 dark:text-white">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-lg hover:border-primary hover:text-primary transition-colors">+</button>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold text-white shadow-md hover:shadow-lg transition-all duration-200 ${
                  product.inStock
                    ? addedFeedback
                      ? 'bg-emerald-500 scale-95'
                      : 'bg-gradient-to-r from-primary to-amber-500 hover:scale-[1.02]'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                <FaCartPlus />
                {addedFeedback ? 'Added to Cart ✓' : product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
              <button
                onClick={() => setWishlist(!wishlist)}
                className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${wishlist ? 'border-rose-500 bg-rose-50 text-rose-500 dark:bg-rose-900/30' : 'border-gray-200 dark:border-gray-700 text-gray-400 hover:border-rose-400 hover:text-rose-400'}`}
              >
                <FaHeart />
              </button>
            </div>

            <Link to="/cart" className="block w-full text-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3.5 px-6 rounded-full font-semibold hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors duration-200">
              Buy Now → Checkout
            </Link>

            {/* Trust signals */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <FaTruckFast className="text-primary" /> Free shipping on orders over $75
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <GrSecure className="text-violet-500" /> Secure payment guaranteed
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {related.map((p, idx) => (
                <ProductCard key={p.id} product={p} aosDelay={String(idx * 100)} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
