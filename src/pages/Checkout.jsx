import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft, FaLock, FaCreditCard } from 'react-icons/fa6';
import { FaTruckFast } from 'react-icons/fa6';
import useCartStore from '../store/useCartStore';

const inputClass = (error) =>
  `w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors dark:bg-gray-800 dark:text-white ${
    error
      ? 'border-rose-400 focus:border-rose-500 bg-rose-50 dark:bg-rose-900/20'
      : 'border-gray-200 dark:border-gray-700 focus:border-primary'
  }`;

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getSubtotal, getShipping, getTotal, getItemCount, clearCart } = useCartStore();
  const subtotal = getSubtotal();
  const shipping = getShipping();
  const total = getTotal();
  const itemCount = getItemCount();

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', state: '', zip: '', country: 'United States',
    cardNumber: '', cardName: '', expiry: '', cvv: '',
    paymentMethod: 'card',
  });
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1); // 1 = shipping, 2 = payment
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  if (cartItems.length === 0 && !isOrderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-3xl">🛒</p>
          <p className="text-xl font-bold">Your cart is empty</p>
          <Link to="/shop" className="text-primary underline">Go to Shop</Link>
        </div>
      </div>
    );
  }

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'First name is required';
    if (!form.lastName.trim()) e.lastName = 'Last name is required';
    if (!form.email.trim() || !form.email.includes('@')) e.email = 'Valid email is required';
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 10) e.phone = 'Valid phone number is required';
    if (!form.address.trim()) e.address = 'Address is required';
    if (!form.city.trim()) e.city = 'City is required';
    if (!form.state.trim()) e.state = 'State is required';
    if (!form.zip.trim() || form.zip.replace(/\D/g, '').length < 4) e.zip = 'Valid ZIP code is required';
    return e;
  };

  const validatePayment = () => {
    const e = {};
    if (form.paymentMethod === 'card') {
      if (!form.cardName.trim()) e.cardName = 'Card name is required';
      if (!form.cardNumber.replace(/\s/g, '') || form.cardNumber.replace(/\D/g, '').length < 16) e.cardNumber = 'Valid 16-digit card number is required';
      if (!form.expiry || !/^\d{2}\/\d{2}$/.test(form.expiry)) e.expiry = 'Valid expiry (MM/YY) is required';
      if (!form.cvv || form.cvv.replace(/\D/g, '').length < 3) e.cvv = 'Valid CVV is required';
    }
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formatted = value;
    if (name === 'cardNumber') formatted = value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19);
    if (name === 'expiry') formatted = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').slice(0, 5);
    if (name === 'cvv') formatted = value.replace(/\D/g, '').slice(0, 4);
    setForm((prev) => ({ ...prev, [name]: formatted }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleShippingContinue = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) { setErrors(e2); return; }
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const e2 = validatePayment();
    if (Object.keys(e2).length > 0) { setErrors(e2); return; }
    setIsOrderPlaced(true);
    const orderTotal = total;
    clearCart();
    navigate('/order-confirmed', {
      replace: true,
      state: { name: form.firstName, email: form.email, total: orderTotal }
    });
  };

  const Field = ({ name, label, type = 'text', placeholder, half }) => (
    <div className={half ? 'sm:col-span-1' : 'sm:col-span-2'}>
      <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        value={form[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className={inputClass(errors[name])}
      />
      {errors[name] && <p className="text-xs text-rose-500 mt-1">{errors[name]}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 duration-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-amber-50 dark:from-gray-900 dark:to-gray-800 py-10 border-b border-gray-200 dark:border-gray-800">
        <div className="container">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Checkout</h1>
          {/* Step Indicator */}
          <div className="flex items-center gap-3 mt-4">
            {['Shipping', 'Payment'].map((s, i) => (
              <React.Fragment key={s}>
                <div className={`flex items-center gap-2 text-sm font-semibold ${step > i ? 'text-primary' : step === i + 1 ? 'text-gray-900 dark:text-white' : 'text-gray-400'}`}>
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 ${step > i ? 'bg-primary border-primary text-white' : step === i + 1 ? 'border-gray-900 dark:border-white text-gray-900 dark:text-white' : 'border-gray-300 text-gray-400'}`}>
                    {step > i ? '✓' : i + 1}
                  </span>
                  {s}
                </div>
                {i < 1 && <div className={`flex-1 max-w-[60px] h-0.5 ${step > 1 ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'}`} />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <form onSubmit={handleShippingContinue}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mb-6">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
                    <FaTruckFast className="text-primary" /> Shipping Information
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field name="firstName" label="First Name *" placeholder="Jane" half />
                    <Field name="lastName" label="Last Name *" placeholder="Doe" half />
                    <Field name="email" label="Email Address *" type="email" placeholder="jane@example.com" />
                    <Field name="phone" label="Phone Number *" type="tel" placeholder="+1 (555) 000-0000" />
                    <Field name="address" label="Street Address *" placeholder="123 Fashion Blvd, Apt 4B" />
                    <Field name="city" label="City *" placeholder="New York" half />
                    <Field name="state" label="State / Province *" placeholder="NY" half />
                    <Field name="zip" label="ZIP / Postal Code *" placeholder="10001" half />
                    <Field name="country" label="Country" placeholder="United States" half />
                  </div>
                </div>
                <div className="flex justify-between">
                  <Link to="/cart" className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors">
                    <FaArrowLeft /> Back to Cart
                  </Link>
                  <button type="submit" className="bg-gradient-to-r from-primary to-amber-500 text-white font-bold py-3.5 px-10 rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200">
                    Continue to Payment →
                  </button>
                </div>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handlePlaceOrder}>
                {/* Shipping Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 mb-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Shipping To</p>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white mt-0.5">{form.firstName} {form.lastName}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{form.address}, {form.city}, {form.state} {form.zip}</p>
                    </div>
                    <button type="button" onClick={() => setStep(1)} className="text-xs text-primary underline font-medium">Edit</button>
                  </div>
                </div>

                {/* Payment */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mb-6">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
                    <FaCreditCard className="text-primary" /> Payment Details
                  </h2>

                  {/* Payment method tabs */}
                  <div className="flex gap-3 mb-6">
                    {['card', 'cod'].map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setForm((p) => ({ ...p, paymentMethod: method }))}
                        className={`flex-1 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all ${form.paymentMethod === method ? 'border-primary bg-primary/5 text-primary' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300'}`}
                      >
                        {method === 'card' ? '💳 Credit / Debit Card' : '💵 Cash on Delivery'}
                      </button>
                    ))}
                  </div>

                  {form.paymentMethod === 'card' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5">Card Number *</label>
                        <input type="text" name="cardNumber" value={form.cardNumber} onChange={handleChange} placeholder="1234 5678 9012 3456" maxLength={19} className={inputClass(errors.cardNumber)} />
                        {errors.cardNumber && <p className="text-xs text-rose-500 mt-1">{errors.cardNumber}</p>}
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5">Name on Card *</label>
                        <input type="text" name="cardName" value={form.cardName} onChange={handleChange} placeholder="Jane Doe" className={inputClass(errors.cardName)} />
                        {errors.cardName && <p className="text-xs text-rose-500 mt-1">{errors.cardName}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5">Expiry Date *</label>
                        <input type="text" name="expiry" value={form.expiry} onChange={handleChange} placeholder="MM/YY" maxLength={5} className={inputClass(errors.expiry)} />
                        {errors.expiry && <p className="text-xs text-rose-500 mt-1">{errors.expiry}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5">CVV *</label>
                        <input type="text" name="cvv" value={form.cvv} onChange={handleChange} placeholder="123" maxLength={4} className={inputClass(errors.cvv)} />
                        {errors.cvv && <p className="text-xs text-rose-500 mt-1">{errors.cvv}</p>}
                      </div>
                    </div>
                  )}
                  {form.paymentMethod === 'cod' && (
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                      <p className="text-sm text-amber-800 dark:text-amber-200 font-medium">💵 You'll pay cash when your order is delivered. A small COD handling fee of $1.99 may apply.</p>
                    </div>
                  )}
                </div>

                <div className="flex justify-between">
                  <button type="button" onClick={() => setStep(1)} className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors">
                    <FaArrowLeft /> Back
                  </button>
                  <button type="submit" className="bg-gradient-to-r from-primary to-amber-500 text-white font-bold py-3.5 px-10 rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex items-center gap-2">
                    <FaLock className="text-sm" /> Place Order — ${total.toFixed(2)}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-5">Your Order ({itemCount})</h2>
              <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
                {cartItems.map((item) => (
                  <div key={item.cartKey} className="flex gap-3 items-center">
                    <div className="relative flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://placehold.co/600x800/f3f4f6/6b7280?text=Product';
                        }}
                        className="w-14 h-14 rounded-lg object-cover object-top"
                      />
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">{item.quantity}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 line-clamp-1">{item.title}</p>
                      {item.selectedSize && item.selectedSize !== 'One Size' && <p className="text-[10px] text-gray-400">Size: {item.selectedSize}</p>}
                    </div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white flex-shrink-0">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 dark:border-gray-700 mt-5 pt-4 space-y-2 text-sm">
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Subtotal</span><span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? 'text-emerald-500 font-semibold' : ''}>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between font-bold text-base text-gray-900 dark:text-white pt-1 border-t border-gray-100 dark:border-gray-700 mt-1">
                  <span>Total</span><span>${total.toFixed(2)}</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-gray-400 justify-center">
                <FaLock className="text-primary" /> Secured by SSL Encryption
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
