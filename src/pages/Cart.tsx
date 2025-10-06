import React, { useEffect, useState } from 'react';
import { addToCart, removeFromCart, updateCartItem } from '../lib/api';

export default function Cart() {
  const [cart, setCart] = useState<any[]>([]);
  // For demo, cart state is local. In real app, fetch from backend.
  const handleRemove = (id: string) => setCart(cart.filter(item => item.id !== id));
  const handleUpdate = (id: string, quantity: number) => setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
  return (
    <div>
      <h2>My Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <div>{item.product?.name} - ${item.product?.price} x {item.quantity}</div>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
            <input type="number" value={item.quantity} min={1} onChange={e => handleUpdate(item.id, Number(e.target.value))} />
          </li>
        ))}
      </ul>
    </div>
  );
}
