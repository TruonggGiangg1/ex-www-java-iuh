import { useMemo, useState } from 'react';
import BookCard from '../components/BookCard.jsx';
import { useBooks } from '../context/BookContext.jsx';
import './CatalogPage.css';

export default function CatalogPage() {
  const { books, isLoading } = useBooks();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('popular');

  const categories = useMemo(() => {
    const set = new Set();
    books.forEach((book) => book.categories.forEach((item) => set.add(item)));
    return Array.from(set);
  }, [books]);

  const filtered = useMemo(() => {
    let data = books;
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
    switch (sort) {
      case 'price-asc':
        data = [...data].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        data = [...data].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        data = [...data].sort((a, b) => b.rating - a.rating);
        break;
      default:
        data = [...data].sort((a, b) => b.reviewCount - a.reviewCount);
    }
    return data;
  }, [books, category, query, sort]);

  return (
    <div className="catalog">
      <header className="catalog__header">
        <h1>Danh mục sách</h1>
        <p>Catalog Service hỗ trợ tìm kiếm tức thì và gợi ý cá nhân hóa theo hành vi người dùng.</p>
      </header>

      <section className="catalog__filters" aria-label="Bộ lọc tìm kiếm">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Tìm theo tên sách, tác giả, chủ đề..."
        />
        <select value={category} onChange={(event) => setCategory(event.target.value)}>
          <option value="">Tất cả thể loại</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select value={sort} onChange={(event) => setSort(event.target.value)}>
          <option value="popular">Phổ biến nhất</option>
          <option value="rating">Đánh giá cao</option>
          <option value="price-asc">Giá tăng dần</option>
          <option value="price-desc">Giá giảm dần</option>
        </select>
      </section>

      <section className="catalog__grid" aria-live="polite">
        {isLoading ? <p>Đang tải danh mục...</p> : filtered.map((book) => <BookCard key={book.id} book={book} />)}
      </section>
    </div>
  );
}
