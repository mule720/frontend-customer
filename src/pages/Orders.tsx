import React, { useEffect, useState } from 'react';
import { getOrders } from '../lib/api';

export default function Orders() {
  const [orders, setOrders] = useState<any[]>([]);
  useEffect(() => {
    getOrders().then(setOrders);
  }, []);
  return (
    <div>
      <h2>My Orders</h2>
      <ul>
        {orders.map(o => (
          <li key={o.id}>
            <div>Order #{o.id} - {o.status} - ${o.total}</div>
            <div>Items: {o.items?.map(i => `${i.product?.name} x${i.quantity}`).join(', ')}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
