import wait from '../utils/wait.js';

const STORAGE_KEY = 'infinity-books-cart';
const NETWORK_DELAY = 150;

function readStorage() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.warn('Không thể đọc giỏ hàng', error);
    return [];
  }
}

function writeStorage(items) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export async function getCart() {
  await wait(NETWORK_DELAY);
  return readStorage();
}

export async function upsertItem(book, quantity) {
  await wait(NETWORK_DELAY);
  const current = readStorage();
  const existing = current.find((item) => item.book.id === book.id);
  let updated;

  if (existing) {
    updated = current.map((item) =>
      item.book.id === book.id ? { ...item, quantity: Math.max(1, item.quantity + quantity) } : item
    );
  } else {
    updated = [...current, { book, quantity }];
  }

  writeStorage(updated);
  return updated;
}

export async function updateQuantity(bookId, quantity) {
  await wait(NETWORK_DELAY);
  const current = readStorage();
  const updated = current
    .map((item) => (item.book.id === bookId ? { ...item, quantity: Math.max(1, quantity) } : item))
    .filter((item) => item.quantity > 0);
  writeStorage(updated);
  return updated;
}

export async function removeItem(bookId) {
  await wait(NETWORK_DELAY);
  const current = readStorage();
  const updated = current.filter((item) => item.book.id !== bookId);
  writeStorage(updated);
  return updated;
}

export async function clearCart() {
  await wait(NETWORK_DELAY);
  writeStorage([]);
  return [];
}
