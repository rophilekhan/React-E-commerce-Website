import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaFilter, FaTimes } from 'react-icons/fa';
import { FaArrowUpWideShort } from 'react-icons/fa6';
import ProductCard from '../components/ProductCard/ProductCard';
import productsData from '../data/products.json';

const CATEGORIES = ['All', 'Men', 'Women', 'Accessories'];
const SORT_OPTIONS = [
  { value: 'default',    label: 'Featured' },
  { value: 'price-asc',  label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating',     label: 'Highest Rated' },
  { value: 'discount',   label: 'Biggest Discount' },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('search') || '';

  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [sortBy, setSortBy] = useState('default');
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [showFilter, setShowFilter] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 200]);

  useEffect(() => {
    const cat = searchParams.get('category') || 'All';
    const q = searchParams.get('search') || '';
    setActiveCategory(cat);
    setSearchQuery(q);
  }, [searchParams]);

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    const newParams = {};
    if (cat !== 'All') newParams.category = cat;
    if (searchQuery.trim()) newParams.search = searchQuery.trim();
    setSearchParams(newParams);
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    const newParams = {};
    if (activeCategory !== 'All') newParams.category = activeCategory;
    if (val.trim()) newParams.search = val.trim();
    setSearchParams(newParams);
  };

  const filtered = useMemo(() => {
    let list = [...productsData];
    if (activeCategory !== 'All') list = list.filter((p) => p.category === activeCategory);
    if (searchQuery) list = list.filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.subcategory.toLowerCase().includes(searchQuery.toLowerCase()));
    list = list.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    switch (sortBy) {
      case 'price-asc':  list.sort((a, b) => a.price - b.price); break;
      case 'price-desc': list.sort((a, b) => b.price - a.price); break;
      case 'rating':     list.sort((a, b) => b.rating - a.rating); break;
      case 'discount':   list.sort((a, b) => b.discount - a.discount); break;
      default: break;
    }
    return list;
  }, [activeCategory, sortBy, searchQuery, priceRange]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 duration-200">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary/10 to-amber-50 dark:from-gray-900 dark:to-gray-800 py-12 border-b border-gray-200 dark:border-gray-800">
        <div className="container">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">Shop All</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">Showing {filtered.length} products</p>
        </div>
      </div>

      <div className="container py-10">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  activeCategory === cat
                    ? 'bg-primary text-white border-primary shadow-md'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Search */}
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="flex-1 sm:w-48 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary"
            />
            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pl-4 pr-9 py-2 rounded-full text-sm border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:border-primary cursor-pointer"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <FaArrowUpWideShort className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
            </div>
            {/* Filter toggle (mobile) */}
            <button onClick={() => setShowFilter(!showFilter)} className="sm:hidden p-2 rounded-full border border-gray-200 dark:border-gray-700">
              {showFilter ? <FaTimes /> : <FaFilter />}
            </button>
          </div>
        </div>

        {/* Price Range Filter */}
        <div className={`mb-8 p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm ${showFilter ? 'block' : 'hidden sm:block'}`}>
          <p className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
            Price Range: <span className="text-primary">${priceRange[0]} – ${priceRange[1]}</span>
          </p>
          <input
            type="range"
            min={0}
            max={200}
            step={5}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-full accent-primary"
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                const newParams = {};
                if (activeCategory !== 'All') newParams.category = activeCategory;
                setSearchParams(newParams);
              }}
              className="mt-3 text-xs text-rose-500 flex items-center gap-1 hover:underline cursor-pointer"
            >
              <FaTimes /> Clear search: "{searchQuery}"
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((product, idx) => (
              <ProductCard key={product.id} product={product} aosDelay={String((idx % 4) * 100)} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-gray-400">
            <p className="text-4xl mb-3">🛍️</p>
            <p className="text-lg font-semibold">No products found</p>
            <p className="text-sm">Try adjusting your filters or search query.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setPriceRange([0, 200]);
                setActiveCategory('All');
                setSearchParams({});
              }}
              className="mt-4 text-primary underline text-sm cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
