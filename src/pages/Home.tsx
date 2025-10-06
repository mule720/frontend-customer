import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const featuredProducts = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 199.99,
    image: 'https://placehold.co/300x300/e4e4e7/ffffff?text=Headphones',
    category: 'Electronics'
  },
  {
    id: 2,
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    image: 'https://placehold.co/300x300/e4e4e7/ffffff?text=T-Shirt',
    category: 'Fashion'
  },
  {
    id: 3,
    name: 'Smart Fitness Watch',
    price: 149.99,
    image: 'https://placehold.co/300x300/e4e4e7/ffffff?text=Watch',
    category: 'Electronics'
  },
  {
    id: 4,
    name: 'Leather Messenger Bag',
    price: 89.99,
    image: 'https://placehold.co/300x300/e4e4e7/ffffff?text=Bag',
    category: 'Accessories'
  }
];

const categories = [
  { id: 1, name: 'Electronics', icon: '🔌' },
  { id: 2, name: 'Fashion', icon: '👕' },
  { id: 3, name: 'Home & Living', icon: '🏠' },
  { id: 4, name: 'Sports', icon: '⚽' },
  { id: 5, name: 'Books', icon: '📚' },
  { id: 6, name: 'Beauty', icon: '💄' }
];

const specialOffers = [
  {
    id: 1,
    title: 'Summer Sale',
    description: 'Up to 50% off on summer essentials',
    code: 'SUMMER50'
  },
  {
    id: 2,
    title: 'New Customer Special',
    description: 'Get 10% off your first purchase',
    code: 'WELCOME10'
  }
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Discover Amazing Products</h1>
            <p className="text-xl mb-8">Shop the latest trends and innovations with our curated collection of premium products.</p>
            <div className="flex gap-4">
              <Button size="lg">Shop Now</Button>
              <Button variant="outline" size="lg">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map(category => (
              <Link 
                key={category.id}
                to={`/catalog?category=${category.name.toLowerCase()}`}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-medium">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.category}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">${product.price}</span>
                    <Button variant="primary" size="sm">Add to Cart</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialOffers.map(offer => (
              <div key={offer.id} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <div className="flex items-center gap-4">
                  <code className="bg-gray-100 px-3 py-1 rounded text-sm font-mono">
                    {offer.code}
                  </code>
                  <Button variant="secondary" size="sm">Copy Code</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get exclusive offers, new product alerts, and insider deals.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <Button variant="outline" size="md">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
