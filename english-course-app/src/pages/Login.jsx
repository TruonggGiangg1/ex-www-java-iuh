import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../components/ui/Section.jsx';
import { useStore } from '../context/StoreContext.jsx';

function Login() {
  const navigate = useNavigate();
  const { login } = useStore();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    login(form.email);
    navigate('/dashboard');
  };

  return (
    <main>
      <Section title="Sign in" subtitle="Access your personalized dashboard and live classes.">
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
          <label style={{ display: 'grid', gap: '0.25rem' }}>
            Email address
            <input
              type="email"
              required
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(148, 163, 184, 0.6)' }}
            />
          </label>
          <label style={{ display: 'grid', gap: '0.25rem' }}>
            Password
            <input
              type="password"
              required
              value={form.password}
              onChange={(event) => setForm((prev) => ({ ...prev, password: event.target.value }))}
              style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(148, 163, 184, 0.6)' }}
            />
          </label>
          <button
            type="submit"
            style={{
              marginTop: '0.5rem',
              padding: '0.8rem 1.5rem',
              borderRadius: '9999px',
              border: 'none',
              background: '#2563eb',
              color: 'white',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Sign in
          </button>
        </form>
      </Section>
    </main>
  );
}

export default Login;
