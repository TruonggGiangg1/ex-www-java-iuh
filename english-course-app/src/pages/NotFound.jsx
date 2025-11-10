import { Link } from 'react-router-dom';
import Section from '../components/ui/Section.jsx';

function NotFound() {
  return (
    <main>
      <Section title="Page not found" subtitle="We could not locate the requested page. Return to the dashboard or browse the catalog.">
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            padding: '0.85rem 1.5rem',
            borderRadius: '9999px',
            background: '#2563eb',
            color: 'white',
            fontWeight: 600
          }}
        >
          Go home
        </Link>
      </Section>
    </main>
  );
}

export default NotFound;
