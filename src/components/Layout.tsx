import { Link, Outlet } from 'react-router-dom';
import { Button } from './ui/Button';

export default function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-xl font-bold">
                EcomStore
              </Link>
              <Link to="/catalog" className="hover:text-primary">
                Catalog
              </Link>
              <Link to="/orders" className="hover:text-primary">
                Orders
              </Link>
              <Link to="/tracking" className="hover:text-primary">
                Track Order
              </Link>
              <Link to="/help" className="hover:text-primary">
                Help
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/cart">
                <Button variant="outline">Cart</Button>
              </Link>
              <Link to="/account">
                <Button variant="outline">Account</Button>
              </Link>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="border-t mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Shop</h3>
              <div className="space-y-2">
                <Link to="/catalog" className="block hover:text-primary">Catalog</Link>
                <Link to="/cart" className="block hover:text-primary">Cart</Link>
                <Link to="/orders" className="block hover:text-primary">Orders</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Account</h3>
              <div className="space-y-2">
                <Link to="/login" className="block hover:text-primary">Login</Link>
                <Link to="/register" className="block hover:text-primary">Register</Link>
                <Link to="/account" className="block hover:text-primary">My Account</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2">
                <Link to="/help" className="block hover:text-primary">Help Center</Link>
                <Link to="/tracking" className="block hover:text-primary">Order Tracking</Link>
                <Link to="/delivery-options" className="block hover:text-primary">Delivery Options</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <a href="mailto:support@ecomstore.com" className="block hover:text-primary">
                  support@ecomstore.com
                </a>
                <a href="tel:+1234567890" className="block hover:text-primary">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
