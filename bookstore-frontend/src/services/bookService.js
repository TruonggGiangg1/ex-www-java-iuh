import { books as mockBooks } from './mockData.js';
import wait from '../utils/wait.js';

const NETWORK_DELAY = 200;

export async function getCatalog({ query, category, limit } = {}) {
  await wait(NETWORK_DELAY);
  let data = [...mockBooks];

  if (query) {
    const normalized = query.toLowerCase();
    data = data.filter(
      (book) =>
        book.title.toLowerCase().includes(normalized) ||
        book.author.toLowerCase().includes(normalized) ||
        book.categories.some((cat) => cat.toLowerCase().includes(normalized))
    );
  }

  if (category) {
    data = data.filter((book) => book.categories.includes(category));
  }

  if (limit) {
    data = data.slice(0, limit);
  }

  return data;
}

export async function getBookById(id) {
  await wait(NETWORK_DELAY);
  const book = mockBooks.find((item) => item.id === id);
  if (!book) {
    throw new Error('Không tìm thấy sách');
  }
  return book;
}

export async function getFeaturedBooks() {
  return getCatalog({ limit: 3 });
}

export async function getRecommendations(bookId) {
  await wait(NETWORK_DELAY);
  const current = mockBooks.find((item) => item.id === bookId);
  if (!current) return [];
  const categories = new Set(current.categories);
  return mockBooks.filter((item) => item.id !== bookId && item.categories.some((cat) => categories.has(cat))).slice(0, 3);
}
