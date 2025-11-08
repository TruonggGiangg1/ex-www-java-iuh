import { Link, NavLink } from 'react-router-dom';
import { useStore } from '../../context/StoreContext.jsx';

const navStyle = {
  backdropFilter: 'blur(16px)',
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  borderBottom: '1px solid rgba(15, 23, 42, 0.08)',
  position: 'sticky',
  top: 0,
  zIndex: 50
};

function NavBar() {
  const { cart, currentUser, logout } = useStore();

  return (
    <header style={navStyle}>
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 1.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <Link
          to="/"
          style={{
            fontWeight: 700,
            fontSize: '1.2rem',
            letterSpacing: '-0.01em',
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center'
          }}
        >
          <span role="img" aria-label="owl">
            🦉
          </span>
          Fluent Academy
        </Link>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {['catalog', 'dashboard', 'assessment', 'cms'].map((item) => (
            <NavLink
              key={item}
              to={`/${item}`}
              style={({ isActive }) => ({
                fontWeight: 500,
                color: isActive ? '#2563eb' : '#334155'
              })}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          ))}

          <NavLink to="/checkout" style={{ fontWeight: 500 }}>
            Cart ({cart.length})
          </NavLink>

          {currentUser ? (
            <button
              type="button"
              onClick={logout}
              style={{
                background: '#1e3a8a',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Sign out
            </button>
          ) : (
            <NavLink
              to="/login"
              style={{
                background: '#2563eb',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                fontWeight: 600
              }}
            >
              Sign in
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
