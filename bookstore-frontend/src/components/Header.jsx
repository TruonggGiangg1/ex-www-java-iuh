import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';

import './Header.css';

const navItems = [
  { to: '/', label: 'Trang chủ' },
  { to: '/catalog', label: 'Danh mục sách' },
  { to: '/profile', label: 'Tài khoản' }
];

export default function Header() {
  const { items } = useCart();
  const { user, isAuthenticated } = useAuth();
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__brand">
          <span className="header__logo" aria-hidden>∞</span>
          <span className="header__title">Infinity Books</span>
        </Link>

        <nav className="header__nav" aria-label="Điều hướng chính">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'header__link header__link--active' : 'header__link')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          <Link to="/cart" className="header__cart" aria-label="Giỏ hàng">
            <span className="material-symbols-rounded" aria-hidden>
              shopping_bag
            </span>
            {cartCount > 0 && <span className="header__badge">{cartCount}</span>}
          </Link>

          {isAuthenticated ? (
            <Link to="/profile" className="header__user">
              <span className="header__greeting">Xin chào, {user.firstName}</span>
              <span className="material-symbols-rounded" aria-hidden>
                account_circle
              </span>
            </Link>
          ) : (
            <Link to="/profile" className="header__login">
              <span className="material-symbols-rounded" aria-hidden>
                login
              </span>
              Đăng nhập
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
