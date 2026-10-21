import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaPlus, FaMinus, FaArrowLeft, FaBagShopping } from 'react-icons/fa6';
import { FaTruckFast } from 'react-icons/fa6';
import useCartStore from '../store/useCartStore';

const Cart = () => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity, getSubtotal, getShipping, getTotal, getItemCount } = useCartStore();

  const subtotal = getSubtotal();
  const shipping = getShipping();
  const total = getTotal();
  const itemCount = getItemCount();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
        <div className="text-center space-y-5 px-4">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <FaBagShopping className="text-primary text-4xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your cart is empty</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xs mx-auto">Looks like you haven't added anything yet. Explore our collections to find something you'll love.</p>
          <Link to="/shop" className="inline-flex items-center gap-2 bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-secondary transition-colors shadow-md hover:shadow-lg">
            <FaArrowLeft className="text-sm" /> Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 duration-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-amber-50 dark:from-gray-900 dark:to-gray-800 py-10 border-b border-gray-200 dark:border-gray-800">
        <div className="container">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Shopping Cart</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">{itemCount} item{itemCount !== 1 ? 's' : ''} in your cart</p>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.cartKey} className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 dark:border-gray-700 flex gap-4 items-start">
                {/* Product Image */}
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = 'https://placehold.co/600x800/f3f4f6/6b7280?text=Product';
                    }}
                    className="w-20 h-24 sm:w-28 sm:h-32 object-cover object-top rounded-xl flex-shrink-0 hover:opacity-80 transition-opacity"
                  />
                </Link>
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <Link to={`/product/${item.id}`}>
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base hover:text-primary transition-colors line-clamp-2">{item.title}</h3>
                      </Link>
                      <p className="text-xs text-gray-400 mt-0.5">{item.color}</p>
                      {item.selectedSize && item.selectedSize !== 'One Size' && (
                        <span className="inline-block text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full mt-1">
                          Size: {item.selectedSize}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => removeFromCart(item.cartKey)}
                      className="text-gray-400 hover:text-rose-500 transition-colors p-1.5 rounded-full hover:bg-rose-50 dark:hover:bg-rose-900/30 flex-shrink-0"
                      aria-label="Remove item"
                    >
                      <FaTrash className="text-sm" />
                    </button>
                  </div>
                  {/* Price & Qty */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2 border border-gray-200 dark:border-gray-700 rounded-full overflow-hidden">
                      <button
                        onClick={() => decrementQuantity(item.cartKey)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
                      >
                        <FaMinus className="text-xs" />
                      </button>
                      <span className="w-8 text-center text-sm font-bold text-gray-900 dark:text-white">{item.quantity}</span>
                      <button
                        onClick={() => incrementQuantity(item.cartKey)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
                      >
                        <FaPlus className="text-xs" />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900 dark:text-white">${(item.price * item.quantity).toFixed(2)}</p>
                      {item.quantity > 1 && (
                        <p className="text-xs text-gray-400">${item.price.toFixed(2)} each</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Continue Shopping */}
            <div className="pt-2">
              <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium">
                <FaArrowLeft className="text-xs" /> Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Order Summary</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Subtotal ({itemCount} items)</span>
                  <span className="font-semibold text-gray-900 dark:text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Shipping</span>
                  <span className={`font-semibold ${shipping === 0 ? 'text-emerald-500' : 'text-gray-900 dark:text-white'}`}>
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <FaTruckFast className="text-primary" />
                    Add ${(75 - subtotal).toFixed(2)} more for free shipping
                  </p>
                )}
                <div className="h-px bg-gray-100 dark:bg-gray-700 my-2" />
                <div className="flex justify-between text-base font-bold text-gray-900 dark:text-white">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Promo code */}
              <div className="mt-5 flex gap-2">
                <input
                  type="text"
                  placeholder="Promo code"
                  className="flex-1 border border-gray-200 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-primary"
                />
                <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold px-4 py-2.5 rounded-full hover:opacity-80 transition-opacity whitespace-nowrap">
                  Apply
                </button>
              </div>

              <Link
                to="/checkout"
                className="mt-5 block w-full bg-gradient-to-r from-primary to-amber-500 text-white font-bold py-4 px-6 rounded-full text-center shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-200"
              >
                Proceed to Checkout →
              </Link>

              {/* Trust badges */}
              <div className="mt-5 flex flex-col gap-2 text-xs text-gray-400 dark:text-gray-500">
                <div className="flex items-center gap-2"><span>🔒</span> Secure SSL encrypted payment</div>
                <div className="flex items-center gap-2"><span>↩️</span> Easy 30-day returns</div>
                <div className="flex items-center gap-2"><span>🚚</span> Free shipping on orders $75+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
