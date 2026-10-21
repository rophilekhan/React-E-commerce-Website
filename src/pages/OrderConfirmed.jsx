import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCircleCheck, FaArrowRight, FaEnvelope } from 'react-icons/fa6';
import confetti from 'canvas-confetti';

const OrderConfirmed = () => {
  const { state } = useLocation();
  const name = state?.name || 'Valued Customer';
  const email = state?.email || '';
  const total = state?.total || 0;
  const orderId = React.useMemo(() => `AM-${Date.now().toString(36).toUpperCase()}`, []);

  useEffect(() => {
    // Celebratory confetti
    let animId;
    const end = Date.now() + 3 * 1000;
    const colors = ['#fea928', '#ed8900', '#ffffff'];
    const frame = () => {
      if (Date.now() > end) return;
      try {
        confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0 }, colors });
        confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1 }, colors });
      } catch (e) {
        // canvas-confetti safety
      }
      animId = requestAnimationFrame(frame);
    };
    frame();
    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center space-y-6">
        {/* Success Icon */}
        <div className="relative inline-block">
          <div className="w-28 h-28 bg-emerald-100 dark:bg-emerald-900/40 rounded-full flex items-center justify-center mx-auto shadow-lg">
            <FaCircleCheck className="text-emerald-500 text-6xl" />
          </div>
          {/* Animated rings */}
          <div className="absolute inset-0 rounded-full border-4 border-emerald-300 dark:border-emerald-700 animate-ping opacity-30" />
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Order Confirmed! 🎉
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
            Thank you, <strong className="text-gray-900 dark:text-white">{name}</strong>! Your AuraMart order has been placed successfully.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-gray-700 text-left space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Order ID</p>
              <p className="text-base font-bold text-primary">{orderId}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Order Total</p>
              <p className="text-base font-bold text-gray-900 dark:text-white">${total.toFixed(2)}</p>
            </div>
          </div>

          <div className="h-px bg-gray-100 dark:bg-gray-700" />

          {/* Status Timeline */}
          <div className="space-y-3">
            {[
              { label: 'Order Received', desc: 'Your order has been confirmed', done: true },
              { label: 'Processing',     desc: 'We\'re preparing your items',    done: false },
              { label: 'Shipped',        desc: 'Your order is on the way',        done: false },
              { label: 'Delivered',      desc: 'Enjoy your purchase!',            done: false },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5 ${step.done ? 'bg-emerald-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500'}`}>
                  {step.done ? '✓' : i + 1}
                </div>
                <div>
                  <p className={`text-sm font-semibold ${step.done ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'}`}>{step.label}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Email confirmation notice */}
        {email && (
          <div className="flex items-center gap-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 text-sm text-amber-800 dark:text-amber-200">
            <FaEnvelope className="flex-shrink-0" />
            <span>A confirmation email has been sent to <strong>{email}</strong></span>
          </div>
        )}

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/"
            className="flex-1 text-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold py-3.5 px-6 rounded-full hover:opacity-80 transition-opacity"
          >
            Back to Home
          </Link>
          <Link
            to="/shop"
            className="flex-1 text-center bg-gradient-to-r from-primary to-amber-500 text-white font-semibold py-3.5 px-6 rounded-full hover:shadow-lg hover:scale-[1.01] transition-all duration-200 flex items-center justify-center gap-2"
          >
            Continue Shopping <FaArrowRight className="text-sm" />
          </Link>
        </div>

        <p className="text-xs text-gray-400 dark:text-gray-500">
          Have a question? Contact us at <a href="mailto:support@auramart.com" className="text-primary hover:underline">support@auramart.com</a>
        </p>
      </div>
    </div>
  );
};

export default OrderConfirmed;
