import wait from '../utils/wait.js';
import { formatCurrency, formatDate } from '../utils/format.js';

const NETWORK_DELAY = 300;

export async function createOrder({ items, customer, payment }) {
  await wait(NETWORK_DELAY);
  const total = items.reduce((sum, item) => sum + item.book.price * item.quantity, 0);

  return {
    orderId: `INV-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
    createdAt: new Date().toISOString(),
    total,
    humanReadableTotal: formatCurrency(total),
    deliveryEstimate: formatDate(new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)),
    customer,
    payment,
    items
  };
}

export async function getOrderHistory() {
  await wait(NETWORK_DELAY);
  return [];
}
