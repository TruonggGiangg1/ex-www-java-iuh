import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';

import { useCart } from '../context/CartContext.jsx';
import { formatCurrency } from '../utils/format.js';
import Rating from './Rating.jsx';
import './BookCard.css';

export default function BookCard({ book }) {
  const { addToCart } = useCart();

  const badge = useMemo(() => {
    if (book.tags.includes('moi')) return { label: 'Mới', variant: 'book-card__badge--primary' };
    if (book.tags.includes('banchay')) return { label: 'Bán chạy', variant: 'book-card__badge--accent' };
    if (book.tags.includes('giamgia')) return { label: 'Ưu đãi', variant: 'book-card__badge--discount' };
    return null;
  }, [book.tags]);

  return (
    <article className="book-card">
      <Link to={`/books/${book.id}`} className="book-card__cover">
        {badge && <span className={`book-card__badge ${badge.variant}`}>{badge.label}</span>}
        <img src={book.coverImage} alt={book.title} loading="lazy" />
      </Link>
      <div className="book-card__body">
        <h3 className="book-card__title">
          <Link to={`/books/${book.id}`}>{book.title}</Link>
        </h3>
        <p className="book-card__author">{book.author}</p>
        <Rating value={book.rating} count={book.reviewCount} />
        <p className="book-card__price">{formatCurrency(book.price)}</p>
        <button type="button" className="book-card__add" onClick={() => addToCart(book, 1)}>
          <span className="material-symbols-rounded" aria-hidden>
            add_shopping_cart
          </span>
          Thêm vào giỏ
        </button>
      </div>
    </article>
  );
}

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    coverImage: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviewCount: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};
