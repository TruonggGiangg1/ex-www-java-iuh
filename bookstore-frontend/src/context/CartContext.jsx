import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import * as cartService from '../services/cartService.js';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadCart() {
      setIsLoading(true);
      try {
        const cart = await cartService.getCart();
        setItems(cart);
      } finally {
        setIsLoading(false);
      }
    }

    loadCart();
  }, []);

  const addToCart = useCallback(async (book, quantity) => {
    const updated = await cartService.upsertItem(book, quantity);
    setItems(updated);
  }, []);

  const updateQuantity = useCallback(async (bookId, quantity) => {
    const updated = await cartService.updateQuantity(bookId, quantity);
    setItems(updated);
  }, []);

  const removeItem = useCallback(async (bookId) => {
    const updated = await cartService.removeItem(bookId);
    setItems(updated);
  }, []);

  const clear = useCallback(async () => {
    await cartService.clearCart();
    setItems([]);
  }, []);

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.book.price * item.quantity, 0);
    const quantity = items.reduce((sum, item) => sum + item.quantity, 0);
    const vat = subtotal * 0.1;
    const shipping = subtotal > 500000 || subtotal === 0 ? 0 : 35000;
    const total = subtotal + vat + shipping;
    return { subtotal, quantity, vat, shipping, total };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      isLoading,
      addToCart,
      updateQuantity,
      removeItem,
      clear,
      totals
    }),
    [items, isLoading, addToCart, updateQuantity, removeItem, clear, totals]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

CartProvider.propTypes = {
  children: PropTypes.node
};

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart phải được sử dụng bên trong CartProvider');
  }
  return context;
}
