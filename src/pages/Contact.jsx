import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaPaperPlane,
  FaCircleCheck,
  FaArrowRight,
  FaClock,
} from 'react-icons/fa6';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required.';
    if (!form.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!form.subject.trim()) errs.subject = 'Subject is required.';
    if (!form.message.trim()) {
      errs.message = 'Message cannot be empty.';
    } else if (form.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSending(true);
    // Simulate swift network dispatch
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 8000);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 duration-200">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-primary/10 via-amber-50 to-amber-100/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 border-b border-gray-200 dark:border-gray-800">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white font-medium">Contact Us</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base max-w-xl">
            Have a question about an order, sizing, or styling advice? We are always here to help you.
          </p>
        </div>
      </div>

      <div className="container py-12">
        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* WhatsApp Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 flex items-center justify-center text-2xl mb-4">
                <FaWhatsapp />
              </div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">WhatsApp Support</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                Chat with our support executive instantly for rapid order inquiries and real-time help.
              </p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mt-3">
                +92 (33) 12699111
              </p>
            </div>
            <a
              href="https://wa.me/923312699111?text=Hello%20AuraMart%20Support%2C%20I%20have%20an%20inquiry%20regarding%20my%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 px-5 rounded-full text-sm transition-all duration-200 hover:scale-[1.02] shadow-sm hover:shadow"
            >
              <FaWhatsapp className="text-base" /> Chat on WhatsApp
            </a>
          </div>

          {/* Email Support Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300 flex items-center justify-center text-2xl mb-4">
                <FaEnvelope />
              </div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Email Us Directly</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                For detailed queries, bulk orders, or partnerships. We respond within 2–4 business hours.
              </p>
              <a
                href="mailto:contact.codesphinx@gmail.com"
                className="text-sm font-semibold text-primary hover:underline mt-3 block break-all"
              >
                contact.codesphinx@gmail.com
              </a>
            </div>
            <a
              href="mailto:contact.codesphinx@gmail.com"
              className="mt-5 inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white font-semibold py-2.5 px-5 rounded-full text-sm transition-all duration-200 hover:scale-[1.02] shadow-sm hover:shadow"
            >
              <FaEnvelope className="text-sm" /> Send Email
            </a>
          </div>

          {/* Phone & Office Location */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 flex items-center justify-center text-2xl mb-4">
                <FaLocationDot />
              </div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Office & Hours</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed flex items-center gap-1.5">
                <FaLocationDot className="text-primary text-xs shrink-0" /> Karachi, Pakistan
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed flex items-center gap-1.5">
                <FaPhone className="text-primary text-xs shrink-0" /> +92 (33) 12699111
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 flex items-center gap-1.5">
                <FaClock className="text-primary text-xs shrink-0" /> Mon – Sat: 9:00 AM – 8:00 PM PKT
              </p>
            </div>
            <Link
              to="/support"
              className="mt-5 inline-flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold py-2.5 px-5 rounded-full text-sm hover:opacity-85 transition-opacity"
            >
              Support Center <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>

        {/* Form and Side Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Send Us a Message
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Fill out the form below and our team will get back to you promptly.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 flex items-start gap-3">
                <FaCircleCheck className="text-emerald-500 text-xl shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-emerald-800 dark:text-emerald-200">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-0.5">
                    Thank you for reaching out. We have received your submission and our team will reply to your email shortly.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Khan"
                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors dark:bg-gray-700 dark:text-white ${
                      errors.name
                        ? 'border-rose-400 focus:border-rose-500 bg-rose-50 dark:bg-rose-900/20'
                        : 'border-gray-200 dark:border-gray-600 focus:border-primary'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="e.g. sarah@example.com"
                    className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors dark:bg-gray-700 dark:text-white ${
                      errors.email
                        ? 'border-rose-400 focus:border-rose-500 bg-rose-50 dark:bg-rose-900/20'
                        : 'border-gray-200 dark:border-gray-600 focus:border-primary'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Subject / Topic <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="e.g. Order Tracking or Product Inquiry"
                  className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors dark:bg-gray-700 dark:text-white ${
                    errors.subject
                      ? 'border-rose-400 focus:border-rose-500 bg-rose-50 dark:bg-rose-900/20'
                      : 'border-gray-200 dark:border-gray-600 focus:border-primary'
                  }`}
                />
                {errors.subject && <p className="text-xs text-rose-500 mt-1">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here with as much detail as possible..."
                  className={`w-full border rounded-xl p-4 text-sm focus:outline-none transition-colors dark:bg-gray-700 dark:text-white resize-none ${
                    errors.message
                      ? 'border-rose-400 focus:border-rose-500 bg-rose-50 dark:bg-rose-900/20'
                      : 'border-gray-200 dark:border-gray-600 focus:border-primary'
                  }`}
                />
                {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-amber-600 hover:from-amber-500 hover:to-primary text-white font-bold py-3.5 px-8 rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200 cursor-pointer disabled:opacity-50"
                >
                  <FaPaperPlane className="text-sm" />
                  {isSending ? 'Sending Message...' : 'Submit Message'}
                </button>
              </div>
            </form>
          </div>

          {/* Quick Info & Help Sidebar */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Need Fast Assistance?
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                Before submitting a ticket, check our Customer Support Center for instant answers regarding shipping, tracking, and returns.
              </p>
              <ul className="space-y-2.5 text-xs text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">✓</span> Free shipping on orders over $75
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">✓</span> 30-day effortless return policy
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">✓</span> WhatsApp instant live chat support
                </li>
              </ul>
              <Link
                to="/support"
                className="mt-5 block w-full text-center bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white text-gray-900 dark:text-white font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors"
              >
                Visit Help Center →
              </Link>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-3xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <FaWhatsapp className="text-3xl" />
                <h3 className="text-lg font-bold">Live WhatsApp Chat</h3>
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-4">
                Skip email queues! Send us a quick voice note or text on WhatsApp for priority response.
              </p>
              <a
                href="https://wa.me/923312699111?text=Hello%20AuraMart%20Support%2C%20I%20need%20assistance."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-white text-emerald-700 font-bold py-2.5 px-4 rounded-xl text-xs shadow hover:bg-emerald-50 transition-colors"
              >
                Open WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
