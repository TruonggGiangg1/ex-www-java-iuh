import PropTypes from 'prop-types';
import './Rating.css';

export default function Rating({ value, count }) {
  return (
    <div className="rating" aria-label={`Đánh giá ${value} trên 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`material-symbols-rounded rating__icon ${value >= star ? 'rating__icon--filled' : ''}`}
          aria-hidden
        >
          {value >= star ? 'grade' : 'grade'}
        </span>
      ))}
      <span className="rating__value">{value.toFixed(1)}</span>
      <span className="rating__count">({count})</span>
    </div>
  );
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired
};
