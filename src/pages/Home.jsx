import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import AOS from 'aos';
import { GrSecure } from 'react-icons/gr';
import { FaTruckFast, FaArrowRight } from 'react-icons/fa6';
import { MdPayment, MdLocalOffer } from 'react-icons/md';
import { FaStar, FaQuoteRight } from 'react-icons/fa6';
import Image1 from '../assets/hero/women.png';
import Image2 from '../assets/hero/shopping.png';
import Image3 from '../assets/hero/sale.png';
import BannerImg from '../assets/women/women2.jpg';
import OrangePattern from '../assets/website/orange-pattern.jpg';
import FooterPattern from '../assets/website/footer-pattern.jpg';
import ProductCard from '../components/ProductCard/ProductCard';
import productsData from '../data/products.json';
import useCartStore from '../store/useCartStore';

/* ──────────────────────────  HERO  ────────────────────────── */
const ImageList = [
  { id: 1, img: Image1, title: "Up to 50% Off On Women's Ethnic Wear", description: "Discover the latest artisanal kurtis, embroidered dresses, and handcrafted ethnic styles designed for everyday grace and celebration." },
  { id: 2, img: Image2, title: "30% Off On Western Collection",         description: "Upgrade your wardrobe with contemporary styles, premium denim, casual chic tops, and statement workwear with unmatched comfort." },
  { id: 3, img: Image3, title: "Mega Season Sale: Up to 70% Off",       description: "Huge discounts across top categories. Grab the hottest trends in men's, women's, and accessories before stock runs out!" },
];

const HeroSection = () => {
  const settings = { dots: false, arrows: false, infinite: true, speed: 800, slidesToScroll: 1, autoplay: true, autoplaySpeed: 4000, cssEase: 'ease-in-out', pauseOnHover: false, pauseOnFocus: true };
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-0 pointer-events-none" />
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                    {data.title}
                  </h1>
                  <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-lg mx-auto sm:mx-0">
                    {data.description}
                  </p>
                  <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
                    <Link to="/shop" className="bg-gradient-to-r from-primary to-amber-600 hover:scale-105 transition-transform duration-200 text-white font-medium py-2.5 px-6 rounded-full shadow-md hover:shadow-lg inline-flex items-center gap-2">
                      Shop Now <FaArrowRight />
                    </Link>
                  </div>
                </div>
                <div className="order-1 sm:order-2 flex justify-center items-center">
                  <div data-aos="zoom-in" data-aos-once="true" className="relative z-10">
                    <img src={data.img} alt={data.title} className="w-[280px] h-[280px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_12px_rgba(0,0,0,0.15)]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

/* ───────────────────────  FEATURED PRODUCTS  ─────────────── */
const FeaturedProducts = () => {
  const featured = productsData.slice(0, 5);
  return (
    <div id="products" className="py-14 bg-gray-50/50 dark:bg-gray-900/50 duration-200">
      <div className="container">
        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm font-semibold uppercase tracking-wider text-primary">Top Selling Products For You</p>
          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold mt-1">Featured Products</h2>
          <p data-aos="fade-up" className="text-sm text-gray-500 dark:text-gray-400 mt-2">Handpicked trends with premium quality, sustainable materials, and modern silhouettes.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {featured.map((product, idx) => (
            <ProductCard key={product.id} product={product} aosDelay={String(idx * 100)} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link to="/shop" className="bg-primary hover:bg-secondary text-white font-medium py-2.5 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2">
            View All Products <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

/* ───────────────────────  TOP PRODUCTS  ─────────────────── */
const topProductsData = productsData.filter(p => p.rating >= 4.8).slice(0, 3);

const TopProductsSection = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div id="top-products" className="py-20 bg-white dark:bg-gray-900 duration-200">
      <div className="container">
        <div className="text-center mb-20 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm font-semibold uppercase tracking-wider text-primary">Top Rated Products For You</p>
          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold mt-1">Best Products</h2>
          <p data-aos="fade-up" className="text-sm text-gray-500 dark:text-gray-400 mt-2">Handcrafted luxury pieces voted highest by our community for durability and style.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24 sm:gap-10 place-items-center">
          {topProductsData.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/90 dark:hover:bg-primary hover:text-white relative shadow-xl hover:shadow-2xl duration-300 group max-w-[320px] w-full pt-16 pb-6 px-6 text-center border border-gray-100 dark:border-gray-700 hover:border-transparent transition-all"
            >
              <div className="h-[100px] flex justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://placehold.co/600x800/f3f4f6/6b7280?text=Product';
                  }}
                  className="max-w-[140px] block mx-auto transform -translate-y-28 group-hover:scale-110 duration-300 drop-shadow-lg object-cover rounded-xl"
                />
              </div>
              <div className="space-y-3">
                <div className="w-full flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => <FaStar key={i} className="text-yellow-400" />)}
                  <span className="text-xs ml-1 font-semibold text-gray-600 dark:text-gray-300 group-hover:text-white">({product.rating})</span>
                </div>
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p className="text-primary font-bold text-lg group-hover:text-white transition-colors">${product.price.toFixed(2)}</p>
                <p className="text-gray-500 dark:text-gray-300 group-hover:text-white/90 duration-300 text-xs leading-relaxed line-clamp-2">{product.description}</p>
                <button
                  type="button"
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(product, product.sizes?.[0], 1); }}
                  className="bg-primary hover:scale-105 duration-300 text-white font-medium py-2 px-6 rounded-full mt-2 group-hover:bg-white group-hover:text-primary shadow-sm hover:shadow cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ───────────────────────  BANNER  ──────────────────────── */
const BannerSection = () => (
  <div id="about" className="min-h-[550px] flex justify-center items-center py-16 bg-gray-50 dark:bg-gray-950 duration-200">
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
        <div data-aos="zoom-in" className="flex justify-center">
          <img src={BannerImg} alt="AuraMart Winter Collection" className="max-w-[420px] h-[360px] w-full mx-auto rounded-2xl shadow-2xl object-cover object-top" />
        </div>
        <div data-aos="fade-up" className="flex flex-col justify-center gap-6">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Limited Time Promo</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-1 text-gray-900 dark:text-white">Winter Sale Up to 50% Off</h2>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-300 tracking-wide leading-relaxed">Experience unparalleled style with our handpicked winter curation. Crafted with premium wool blends, breathable cottons, and weather-resistant finishes tailored for every occasion.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { Icon: GrSecure, label: 'Quality Products', bg: 'bg-violet-100 text-violet-600 dark:bg-violet-900/50 dark:text-violet-300', delay: '100' },
              { Icon: FaTruckFast, label: 'Fast Delivery',    bg: 'bg-yellow-100 text-amber-600 dark:bg-amber-900/50 dark:text-amber-300', delay: '200' },
              { Icon: MdPayment,  label: 'Easy Payment',     bg: 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300', delay: '300' },
              { Icon: MdLocalOffer, label: 'Exclusive Offers', bg: 'bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-300', delay: '400' },
            ].map(({ Icon, label, bg, delay }) => (
              <div key={label} data-aos="fade-up" data-aos-delay={delay} className="flex items-center gap-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <Icon className={`text-2xl h-10 w-10 p-2 rounded-full ${bg}`} />
                <span className="font-medium text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ───────────────────────  CATEGORIES  ──────────────────────── */
const categories = ['Men', 'Women', 'Accessories'];
const CategoriesSection = () => (
  <div className="py-14 bg-white dark:bg-gray-900 duration-200">
    <div className="container">
      <div className="text-center mb-12 max-w-[600px] mx-auto">
        <p data-aos="fade-up" className="text-sm font-semibold uppercase tracking-wider text-primary">Browse By Category</p>
        <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold mt-1">Shop By Style</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {categories.map((cat, i) => {
          const catProducts = productsData.filter(p => p.category === cat);
          const cover = catProducts[0]?.image || '';
          return (
            <Link
              key={cat}
              to={`/shop?category=${cat}`}
              data-aos="zoom-in"
              data-aos-delay={String(i * 100)}
              className="group relative overflow-hidden rounded-2xl h-64 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={cover}
                alt={cat}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://placehold.co/600x800/f3f4f6/6b7280?text=' + encodeURIComponent(cat);
                }}
                className="w-full h-full object-cover object-top group-hover:scale-110 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white text-xl font-bold">{cat}</h3>
                <p className="text-primary text-sm font-semibold flex items-center gap-1 mt-0.5 group-hover:gap-2 transition-all">
                  Shop Now <FaArrowRight className="text-xs" />
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  </div>
);

/* ───────────────────────  SUBSCRIBE  ──────────────────────── */
const SubscribeSection = () => {
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) { setSubscribed(true); setEmail(''); setTimeout(() => setSubscribed(false), 5000); }
  };
  return (
    <div
      id="newsletter"
      data-aos="zoom-in"
      className="my-16 text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${OrangePattern})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
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
            <div className="p-4 bg-emerald-500/95 text-white rounded-full font-medium text-sm shadow-md">
              🎉 Thank you! Check your inbox for your 15% welcome code.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full p-3.5 px-5 text-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white bg-white shadow-md text-sm"
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

/* ───────────────────────  TESTIMONIALS  ──────────────────────── */
const TestimonialData = [
  { id: 1, name: 'Sophia Martinez', role: 'Fashion Blogger', text: 'AuraMart has completely elevated my wardrobe. The fabrics are exceptional, the cut of the ethnic kurtis is so flattering, and shipping arrived 2 days earlier than expected!', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80', rating: 5 },
  { id: 2, name: 'Marcus Chen', role: 'Creative Director', text: 'I ordered the resort shirt and denim collection. The stitching details and breathability are top notch. Easily the best online shopping experience I have had this year.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80', rating: 5 },
  { id: 3, name: 'Amina Al-Mansoor', role: 'Verified Buyer', text: 'The colors look even more vibrant in person! Customer support was super responsive when I had a sizing question. AuraMart is now my go-to boutique.', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', rating: 5 },
  { id: 4, name: 'David Reynolds', role: 'Stylist', text: 'Phenomenal blend of modern streetwear and timeless casual classics. The materials feel substantial and hold their shape after multiple washes.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80', rating: 5 },
];

const TestimonialsSection = () => {
  const settings = { dots: true, arrows: false, infinite: true, speed: 600, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000, cssEase: 'ease-in-out', pauseOnHover: true, responsive: [{ breakpoint: 10000, settings: { slidesToShow: 3 } }, { breakpoint: 1024, settings: { slidesToShow: 2 } }, { breakpoint: 640, settings: { slidesToShow: 1 } }] };
  return (
    <div id="testimonials" className="py-16 mb-12 bg-white dark:bg-gray-900 duration-200">
      <div className="container">
        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm font-semibold uppercase tracking-wider text-primary">What Our Customers Are Saying</p>
          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold mt-1">Customer Testimonials</h2>
          <p data-aos="fade-up" className="text-sm text-gray-500 dark:text-gray-400 mt-2">Real stories from real shoppers who found their signature vibe with AuraMart.</p>
        </div>
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6 px-3">
                <div className="flex flex-col items-center gap-4 shadow-md hover:shadow-xl transition-all duration-300 py-8 px-6 rounded-2xl dark:bg-gray-800 bg-amber-50/40 dark:border dark:border-gray-700 relative overflow-hidden h-full min-h-[290px] justify-between">
                  <div className="flex flex-col items-center gap-3">
                    <img src={data.img} alt={data.name} className="rounded-full w-16 h-16 object-cover border-2 border-primary shadow-sm" />
                    <div className="flex gap-1 text-yellow-400 text-xs">
                      {[...Array(data.rating)].map((_, i) => <FaStar key={i} />)}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 text-center italic relative z-10 line-clamp-4">"{data.text}"</p>
                  <div className="text-center">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white">{data.name}</h3>
                    <p className="text-xs text-primary font-medium">{data.role}</p>
                  </div>
                  <FaQuoteRight className="text-primary/10 dark:text-primary/5 text-6xl absolute top-3 right-3 pointer-events-none" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

/* ───────────────────────  HOME PAGE  ──────────────────────── */
const Home = () => {
  React.useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <TopProductsSection />
      <BannerSection />
      <CategoriesSection />
      <SubscribeSection />
      <TestimonialsSection />
    </>
  );
};

export default Home;
