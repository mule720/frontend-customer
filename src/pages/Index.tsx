import React from 'react';

const categories = [
  { name: 'Mobile', count: '2.5k+', icon: '📱' },
  { name: 'Audio', count: '1.8k+', icon: '🎧' },
  { name: 'Laptops', count: '950+', icon: '💻' },
  { name: 'Wearables', count: '1.2k+', icon: '⌚' },
  { name: 'Cameras', count: '680+', icon: '📷' },
  { name: 'Gaming', count: '1.4k+', icon: '🎮' },
];

const products = [
  { id: 1, name: 'Premium Wireless Headphones', category: 'Audio', price: 199, oldPrice: 249, discount: 20, rating: 4.8, reviews: 12471, image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167' },
  { id: 2, name: 'Noise-Canceling Headphones', category: 'Audio', price: 299, rating: 4.7, reviews: 892, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8' },
  { id: 3, name: 'Professional Studio Headphones', category: 'Audio', price: 149, rating: 4.6, reviews: 534, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308' },
  { id: 4, name: 'Wireless Gaming Headset', category: 'Gaming', price: 179, oldPrice: 219, discount: 18, rating: 4.5, reviews: 456, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308' },
  { id: 5, name: 'Latest Smartphone Pro', category: 'Mobile', price: 999, rating: 4.9, reviews: 23411, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9' },
  { id: 6, name: 'Budget Smartphone', category: 'Mobile', price: 299, oldPrice: 349, discount: 11, rating: 4.7, reviews: 18761, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308' },
  { id: 7, name: 'Compact Phone', category: 'Mobile', price: 599, rating: 4.6, reviews: 7341, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308' },
  { id: 8, name: 'MacBook Pro 16"', category: 'Laptops', price: 2399, rating: 4.8, reviews: 1543, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8' },
  { id: 9, name: 'Gaming Laptop', category: 'Laptops', price: 1599, oldPrice: 1799, discount: 11, rating: 4.7, reviews: 892, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8' },
  { id: 10, name: 'Ultrabook', category: 'Laptops', price: 1199, rating: 4.6, reviews: 854, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8' },
  { id: 11, name: 'Business Laptop', category: 'Laptops', price: 899, rating: 4.5, reviews: 432, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8' },
];

const features = [
  { icon: '🚚', title: 'Free Shipping', desc: 'Free delivery on orders over $50. Fast and reliable shipping worldwide.' },
  { icon: '🔒', title: 'Secure Payment', desc: '100% secure payment processing with advanced encryption technology.' },
  { icon: '📞', title: '24/7 Support', desc: 'Round-the-clock customer support to help you with any questions.' },
  { icon: '↩️', title: 'Easy Returns', desc: '30-day hassle-free returns and exchanges on all products.' },
];


const Index: React.FC = () => (
  <div className="min-h-screen bg-white">
    {/* Header */}
  <header className="bg-white border-b py-3 px-2 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-4 sm:gap-8 w-full sm:w-auto">
  <span className="text-xl sm:text-2xl font-bold text-[#2563EB]">ShopApp</span>
  <div className="relative w-full xs:w-64 sm:w-96">
          <input
            type="text"
            placeholder="Search products..."
            className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full text-xs sm:text-sm"
          />
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </div>
      </div>
      <div className="flex items-center gap-4 sm:gap-6">
        <button className="text-gray-600 hover:text-blue-600 relative">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        </button>
        <button className="text-gray-600 hover:text-blue-600 relative">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">3</span>
        </button>
      </div>
    </header>

    {/* Hero Section */}
  <section className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-3xl mx-2 xs:mx-4 sm:mx-8 p-4 xs:p-6 sm:p-10 mt-6 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex-1 text-white">
        <div className="flex items-center mb-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>
          <span className="text-sm ml-2">Trusted by 50K+ customers</span>
        </div>
  <h1 className="text-2xl xs:text-3xl sm:text-5xl font-bold mb-3">Shop Smart,<br /><span className="text-yellow-300">Live Better</span></h1>
  <p className="mb-4 text-xs xs:text-sm sm:text-lg opacity-90">Discover premium products with lightning-fast delivery, secure payments, and exceptional customer service.</p>
        <div className="flex gap-2 xs:gap-4 flex-col xs:flex-row">
          <button className="bg-white text-blue-600 font-semibold px-4 xs:px-6 py-2 xs:py-3 rounded-lg shadow-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2 w-full xs:w-auto">
            Shop Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </button>
          <button className="bg-white/10 text-white font-semibold px-4 xs:px-6 py-2 xs:py-3 rounded-lg border border-white/30 hover:bg-white/20 transition-all w-full xs:w-auto">Learn More</button>
        </div>
      </div>
      <div className="flex-1 flex justify-center mt-8 md:mt-0">
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-2 xs:p-4">
          <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8" alt="Hero" className="rounded-xl w-full max-w-[220px] xs:max-w-[320px] h-28 xs:h-40 object-contain shadow-lg" />
        </div>
      </div>
    </section>

    {/* Category Section */}
  <section className="mt-10 px-2 xs:px-4 sm:px-8">
      <h2 className="text-xl font-bold text-slate-900 mb-2">Shop by Category</h2>
      <p className="text-slate-600 mb-6">Explore our wide range of categories and find exactly what you're looking for</p>
  <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-2 xs:gap-4">
        {categories.map((cat) => (
          <div key={cat.name} className="bg-white rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition-all cursor-pointer group">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
              cat.name === 'Mobile' ? 'bg-blue-100 text-blue-600' :
              cat.name === 'Audio' ? 'bg-purple-100 text-purple-600' :
              cat.name === 'Laptops' ? 'bg-green-100 text-green-600' :
              cat.name === 'Wearables' ? 'bg-orange-100 text-orange-600' :
              cat.name === 'Cameras' ? 'bg-pink-100 text-pink-600' :
              'bg-red-100 text-red-600'
            } group-hover:scale-110 transition-transform`}>
              {/* SVG icons for each category can be added here for more accuracy */}
              <span className="text-3xl">{cat.icon}</span>
            </div>
            <span className="font-semibold text-gray-900 text-center">{cat.name}</span>
            <span className="text-sm text-gray-500 mt-1">{cat.count} products</span>
          </div>
        ))}
      </div>
    </section>

    {/* Featured Products */}
  <section className="mt-10 px-2 xs:px-4 sm:px-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Featured Products</h2>
      <p className="text-slate-600 mb-6">Discover our handpicked selection of premium products</p>
  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xs:gap-6">
        {products.map((p) => (
          <div key={p.id} className="group bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-xl transition-all duration-300 relative flex flex-col">
            {p.discount && (
              <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">-{p.discount}%</span>
            )}
            <div className="relative rounded-xl overflow-hidden mb-2 xs:mb-4">
              <img src={p.image} alt={p.name} className="w-full max-w-[160px] mx-auto h-24 xs:h-32 object-contain transform group-hover:scale-105 transition-transform duration-300" />
              <button className="absolute top-2 xs:top-3 right-2 xs:right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-gray-600 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">{p.category}</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1 xs:mb-2 text-sm xs:text-base sm:text-lg line-clamp-2">{p.name}</h4>
            <div className="flex items-center gap-1 xs:gap-2 mb-1 xs:mb-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-4 h-4 ${i < Math.floor(p.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium">{p.rating}</span>
              <span className="text-xs text-gray-500">({p.reviews})</span>
            </div>
            <div className="flex items-center gap-1 xs:gap-2 mb-2 xs:mb-3">
              <span className="text-base xs:text-xl font-bold text-blue-600">${p.price}</span>
              {p.oldPrice && <span className="text-xs xs:text-sm line-through text-gray-400">${p.oldPrice}</span>}
            </div>
            <div className="flex justify-end mt-auto">
              <button className="bg-blue-600 text-white w-full py-2 xs:py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-xs xs:text-sm font-medium flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Why Choose Us */}
  <section className="mt-16 mb-10 px-2 xs:px-4 sm:px-8">
      <h2 className="text-xl font-bold text-slate-900 mb-2 text-center">Why Choose Us</h2>
      <p className="text-slate-600 mb-8 text-center">We're committed to providing the best shopping experience with premium services</p>
  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-8 max-w-6xl mx-auto">
        {features.map((f) => (
          <div key={f.title} className="group bg-white rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition-all duration-300">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
              f.title === 'Free Shipping' ? 'bg-blue-100 text-blue-600' :
              f.title === 'Secure Payment' ? 'bg-green-100 text-green-600' :
              f.title === '24/7 Support' ? 'bg-purple-100 text-purple-600' :
              'bg-orange-100 text-orange-600'
            } group-hover:scale-110 transition-transform`}>
              {/* SVG icons for each feature can be added here for more accuracy */}
              <span className="text-3xl">{f.icon}</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-3 text-center text-lg">{f.title}</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Index;
