import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaTruckFast,
  FaRotateLeft,
  FaCircleQuestion,
  FaShieldHalved,
  FaWhatsapp,
  FaEnvelope,
  FaArrowRight,
  FaMagnifyingGlass,
  FaChevronDown,
} from 'react-icons/fa6';

const faqs = [
  {
    q: 'How can I track the delivery status of my order?',
    a: 'Once your order ships, you will receive a tracking link via email with your carrier information and dynamic live updates. You can also contact our support team on WhatsApp anytime with your Order ID for real-time tracking.',
  },
  {
    q: 'What is your return and refund policy?',
    a: 'We offer a 30-day effortless return and exchange policy from the delivery date. Items must be unworn, unwashed, and with all original tags attached. Refunds are processed to your original payment method within 3–5 business days after inspection.',
  },
  {
    q: 'What are the delivery timelines and shipping fees?',
    a: 'We provide free standard shipping on all orders over $75. For orders below $75, a flat shipping fee of $5.99 applies. Standard delivery takes 3–5 business days within major metropolitan areas.',
  },
  {
    q: 'Which payment methods do you accept?',
    a: 'We accept all major credit and debit cards (Visa, MasterCard, American Express) through secure 256-bit SSL encryption, as well as Cash on Delivery (COD) for eligible regions.',
  },
  {
    q: 'Can I cancel or modify my order after placing it?',
    a: 'You can modify or cancel your order within 2 hours of placement by texting our WhatsApp support or emailing contact.codesphinx@gmail.com. Once an order enters packing and fulfillment, it cannot be canceled but can be returned upon delivery.',
  },
];

const Support = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [trackId, setTrackId] = useState('');
  const [trackResult, setTrackResult] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    if (!trackId.trim()) return;
    setTrackResult({
      id: trackId.trim().toUpperCase(),
      status: 'In Transit',
      carrier: 'Swift Express Courier',
      eta: 'Estimated delivery within 2–3 business days',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 duration-200">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-primary/10 via-amber-50 to-amber-100/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 border-b border-gray-200 dark:border-gray-800">
        <div className="container">
          <nav className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium">Customer Support</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Customer <span className="text-primary">Support</span> & Help Center
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base max-w-xl">
            Everything you need to know about your order, shipping, returns, and getting in touch with our team.
          </p>

          {/* Quick jump navigation */}
          <div className="flex flex-wrap gap-2 mt-6">
            {[
              { label: 'Order Tracking', href: '#tracking' },
              { label: 'Shipping Policy', href: '#shipping' },
              { label: 'Returns & Refunds', href: '#returns' },
              { label: 'Frequently Asked Questions', href: '#faq' },
              { label: 'Privacy & Security', href: '#privacy' },
            ].map((pill) => (
              <a
                key={pill.label}
                href={pill.href}
                className="bg-white/80 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary text-xs font-semibold px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 transition-colors shadow-xs"
              >
                {pill.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-12 space-y-12">
        {/* Order Tracking Section */}
        <section
          id="tracking"
          className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 dark:border-gray-700 scroll-mt-24"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-primary mb-2">
              <FaTruckFast className="text-2xl" />
              <span className="text-xs font-bold uppercase tracking-wider">Live Tracking</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Track Your Package
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 mb-6">
              Enter your Order Confirmation ID (e.g. AM-XXXX or SV-XXXX) to check its current fulfillment status.
            </p>

            <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={trackId}
                  onChange={(e) => setTrackId(e.target.value)}
                  placeholder="Enter your Order ID..."
                  className="w-full border border-gray-200 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-full px-5 py-3 text-sm focus:outline-none focus:border-primary pl-11"
                />
                <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-full text-sm shadow-md transition-all duration-200 hover:scale-[1.02] cursor-pointer whitespace-nowrap"
              >
                Track Order
              </button>
            </form>

            {trackResult && (
              <div className="mt-6 p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-gray-900 dark:text-white">
                    Order {trackResult.id}
                  </span>
                  <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {trackResult.status}
                  </span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  Carrier: <strong>{trackResult.carrier}</strong>
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  {trackResult.eta}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Policies Grid: Shipping & Returns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Shipping Policy */}
          <section
            id="shipping"
            className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-gray-700 scroll-mt-24 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300 flex items-center justify-center text-2xl mb-4">
                <FaTruckFast />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Shipping Policy</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-4 leading-relaxed">
                Fast, secure doorstep delivery with trusted logistics partners.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Free Shipping:</strong> On all orders totaling $75 or above.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Flat Delivery Fee:</strong> $5.99 on orders under $75.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Dispatch Speed:</strong> Orders placed before 2:00 PM ship the same business day.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>SMS & Email Tracking:</strong> Instant alerts upon dispatch and out-for-delivery.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Returns & Exchanges */}
          <section
            id="returns"
            className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-gray-700 scroll-mt-24 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 flex items-center justify-center text-2xl mb-4">
                <FaRotateLeft />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Returns & Exchanges
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-4 leading-relaxed">
                30-day hassle-free window for full refunds or instant size exchanges.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>30-Day Window:</strong> Returns accepted within 30 days of receiving your package.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Free Exchanges:</strong> Need a different size? Exchanges have zero return fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Quick Refunds:</strong> Processed within 3–5 working days back to your original payment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Condition:</strong> Must be unworn with all tags and original packaging intact.</span>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* FAQs Accordion */}
        <section
          id="faq"
          className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 dark:border-gray-700 scroll-mt-24"
        >
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-primary font-semibold text-xs uppercase tracking-wider">
              Answers & Assistance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
              Common questions answered by our customer experience specialists.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-4 sm:p-5 text-left flex justify-between items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors cursor-pointer"
                  >
                    <span className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">
                      {item.q}
                    </span>
                    <FaChevronDown
                      className={`text-xs text-primary transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Privacy & Security */}
        <section
          id="privacy"
          className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-3xl p-6 sm:p-10 shadow-md scroll-mt-24 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <FaShieldHalved className="text-lg" />
              <span>Privacy & 256-Bit SSL Payment Protection</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">
              Your Personal Data is 100% Protected
            </h2>
            <p className="text-xs text-gray-300 max-w-xl leading-relaxed">
              We never sell your contact details or store sensitive credit card credentials. All transactions are securely handled by bank-grade encrypted payment gateways.
            </p>
          </div>
          <Link
            to="/shop"
            className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-full text-sm shadow-md transition-all hover:scale-105 shrink-0"
          >
            Start Shopping Safely →
          </Link>
        </section>

        {/* Still Need Help Direct CTA */}
        <div className="bg-amber-50 dark:bg-gray-800/80 rounded-3xl p-8 border border-amber-200 dark:border-gray-700 text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Still Have Questions?
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto">
            Our support desk is ready to assist you via WhatsApp chat or direct email.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <a
              href="https://wa.me/923312699111?text=Hello%20AuraMart%20Support%2C%20I%20need%20assistance%20with%20my%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-full text-sm shadow-sm transition-all hover:scale-105"
            >
              <FaWhatsapp className="text-base" /> Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-full text-sm shadow-sm transition-all hover:scale-105"
            >
              <FaEnvelope className="text-sm" /> Contact Form <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
