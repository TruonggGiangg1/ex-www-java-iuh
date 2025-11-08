import { useMemo } from 'react';
import Section from '../components/ui/Section.jsx';
import Price from '../components/ui/Price.jsx';
import { useStore } from '../context/StoreContext.jsx';

function Checkout() {
  const { cart, removeFromCart } = useStore();

  const total = useMemo(() => cart.reduce((sum, item) => sum + item.price, 0), [cart]);

  return (
    <main>
      <Section
        title="Checkout"
        subtitle="Review your selected courses and confirm your enrollment. All payments are handled securely via the SOA payment service."
      >
        {cart.length === 0 ? (
          <p>Your cart is empty. Browse the catalog to add courses.</p>
        ) : (
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '1rem' }}>
              {cart.map((course) => (
                <li
                  key={course.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem 1.5rem',
                    borderRadius: '1rem',
                    background: 'white',
                    border: '1px solid rgba(148, 163, 184, 0.3)'
                  }}
                >
                  <div>
                    <h3 style={{ margin: 0 }}>{course.title}</h3>
                    <p style={{ margin: 0, color: '#64748b' }}>{course.description}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Price value={course.price} />
                    <button
                      type="button"
                      onClick={() => removeFromCart(course.id)}
                      style={{ border: 'none', background: 'transparent', color: '#dc2626', cursor: 'pointer' }}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 1.5rem',
                borderRadius: '1rem',
                background: 'rgba(37, 99, 235, 0.08)'
              }}
            >
              <strong>Total</strong>
              <Price value={total} highlight />
            </div>
            <button
              type="button"
              style={{
                padding: '0.85rem 1.5rem',
                borderRadius: '9999px',
                background: '#2563eb',
                color: 'white',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Complete purchase
            </button>
          </div>
        )}
      </Section>
    </main>
  );
}

export default Checkout;
