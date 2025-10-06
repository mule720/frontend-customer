import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Page imports
import Index from './pages/Index';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import OrderHistory from './pages/OrderHistory';
import Account from './pages/Account';
import Login from './pages/Login';
import Register from './pages/Register';
import Help from './pages/Help';
import Tracking from './pages/Tracking';
import DeliveryOptions from './pages/DeliveryOptions';
import Payment from './pages/Payment';
import NotFound from './pages/NotFound';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/help" element={<Help />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/delivery-options" element={<DeliveryOptions />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
