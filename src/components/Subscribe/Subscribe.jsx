import React from 'react';
import Banner from "../../assets/website/orange-pattern.jpg";

const BannerImg = {
    backgroundImage: `url(${Banner})`, 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat", 
    backgroundSize: "cover", 
    height: "100%",
    width: "100%",
};

const Subscribe = () => {
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <div
      id="newsletter"
      data-aos="zoom-in"
      className="my-16 text-white relative overflow-hidden"
      style={BannerImg}
    >
      <div className="container py-16 px-4 sm:px-8">
        <div className="space-y-6 max-w-xl mx-auto text-center">
          <span className="text-white font-semibold text-xs sm:text-sm uppercase tracking-widest bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full inline-block shadow-sm">
            VIP Club
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white drop-shadow-sm">
            Get Notified About New Drops & Secret Deals
          </h2>
          <p className="text-sm sm:text-base text-white/95 max-w-md mx-auto">
            Join 25,000+ fashion insiders and receive exclusive discounts directly to your inbox every week.
          </p>

          {subscribed ? (
            <div className="p-4 bg-emerald-500/95 text-white rounded-full font-medium text-sm animate-fade-in shadow-lg">
              🎉 Thank you! Check your inbox for your 15% welcome code.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                data-aos="fade-up"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full p-3.5 px-5 text-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white shadow-md bg-white text-sm"
              />
              <button
                type="submit"
                className="bg-gray-900 hover:bg-black text-white font-semibold py-3.5 px-8 rounded-full shadow-lg transition-all duration-200 whitespace-nowrap cursor-pointer hover:scale-105 text-sm"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
