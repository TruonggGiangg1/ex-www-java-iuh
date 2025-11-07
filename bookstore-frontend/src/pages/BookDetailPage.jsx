import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getBookById, getRecommendations } from '../services/bookService.js';
import { useCart } from '../context/CartContext.jsx';
import { formatCurrency } from '../utils/format.js';
import Rating from '../components/Rating.jsx';
import BookCard from '../components/BookCard.jsx';
import './BookDetailPage.css';

export default function BookDetailPage() {
  const { bookId } = useParams();
  const { addToCart } = useCart();
  const [book, setBook] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      try {
        const result = await getBookById(bookId);
        setBook(result);
        const related = await getRecommendations(bookId);
        setRecommendations(related);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    load();
  }, [bookId]);

  if (isLoading) {
    return <p>Đang tải dữ liệu sách...</p>;
  }

  if (error) {
    return (
      <div className="book-detail__error">
        <p>Không thể tải dữ liệu sách: {error}</p>
        <Link to="/catalog">Quay lại danh mục</Link>
      </div>
    );
  }

  if (!book) {
    return null;
  }

  return (
    <div className="book-detail">
      <section className="book-detail__hero">
        <div className="book-detail__cover">
          <img src={book.coverImage} alt={book.title} />
        </div>
        <div className="book-detail__info">
          <h1>{book.title}</h1>
          <p className="book-detail__author">{book.author}</p>
          <Rating value={book.rating} count={book.reviewCount} />
          <p className="book-detail__price">{formatCurrency(book.price)}</p>
          <p className="book-detail__description">{book.description}</p>

          <div className="book-detail__meta">
            <div>
              <h3>Danh mục</h3>
              <ul>
                {book.categories.map((cat) => (
                  <li key={cat}>{cat}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Điểm nổi bật</h3>
              <ul>
                {book.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="book-detail__actions">
            <button type="button" onClick={() => addToCart(book, 1)}>
              <span className="material-symbols-rounded" aria-hidden>
                add_shopping_cart
              </span>
              Thêm vào giỏ
            </button>
            <Link to="/checkout" className="book-detail__buy">
              Mua ngay
            </Link>
          </div>
        </div>
      </section>

      <section className="book-detail__recommendations">
        <h2>Gợi ý từ hệ thống</h2>
        <p>Các đầu sách tương tự được tổng hợp từ Recommendation Service.</p>
        <div className="book-detail__grid">
          {recommendations.length === 0 ? (
            <p>Chưa có gợi ý tương tự.</p>
          ) : (
            recommendations.map((item) => <BookCard key={item.id} book={item} />)
          )}
        </div>
      </section>
    </div>
  );
}
