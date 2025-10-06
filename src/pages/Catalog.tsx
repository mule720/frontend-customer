import React, { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getProducts, addToCart } from '../lib/api';
import Button from '../components/ui/Button';
import { toast } from 'sonner';

interface Product {
  id: string;
  name: string;
  description: string;
  brand: string;
  basePrice: number;
  media: { url: string }[];
  categories: { name: string }[];
  variants: {
    id: string;
    name: string;
    stockQuantity: number;
    priceAdjustment: number;
  }[];
}

interface FilterState {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
}

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterState>({
    category: searchParams.get('category') || undefined,
    search: searchParams.get('search') || undefined
  });

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getProducts({
        categoryId: filters.category,
        search: filters.search
      });
      setProducts(data || []);
    } catch (err) {
      setError('Failed to load products. Please try again later.');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleAddToCart = async (productId: string, variantId?: string) => {
    try {
      await addToCart({ productId, quantity: 1, variantId });
      toast.success('Product added to cart');
    } catch (err) {
      toast.error('Failed to add product to cart');
      console.error('Error adding to cart:', err);
    }
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const search = formData.get('search') as string;
    setFilters(prev => ({ ...prev, search }));
    setSearchParams(prev => {
      if (search) {
        prev.set('search', search);
      } else {
        prev.delete('search');
      }
      return prev;
    });
  };

  const handleCategoryFilter = (category: string) => {
    setFilters(prev => ({ ...prev, category }));
    setSearchParams(prev => {
      prev.set('category', category);
      return prev;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Product Catalog</h1>
          
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <form onSubmit={handleSearch} className="flex-1">
              <div className="relative">
                <input
                  type="search"
                  name="search"
                  placeholder="Search products..."
                  defaultValue={filters.search}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Button 
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                >
                  Search
                </Button>
              </div>
            </form>
            
            <div className="flex gap-2 overflow-x-auto pb-2">
              {['Electronics', 'Fashion', 'Home & Living', 'Sports', 'Books', 'Beauty'].map(category => (
                <Button
                  key={category}
                  variant={filters.category === category.toLowerCase() ? 'default' : 'outline'}
                  onClick={() => handleCategoryFilter(category.toLowerCase())}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && products.length === 0 && (
          <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Product Grid */}
        {!loading && !error && products.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-w-1 aspect-h-1 w-full">
                  <img
                    src={product.media[0]?.url || 'https://placehold.co/300x300/e4e4e7/ffffff?text=No+Image'}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-sm text-gray-500 mb-1">{product.brand}</div>
                  <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    {product.categories.map(cat => (
                      <span key={cat.name} className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {cat.name}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">${product.basePrice.toFixed(2)}</span>
                    <Button
                      onClick={() => handleAddToCart(product.id)}
                      disabled={product.variants?.every(v => v.stockQuantity === 0)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                  {product.variants?.every(v => v.stockQuantity === 0) && (
                    <p className="text-red-500 text-sm mt-2">Out of stock</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
