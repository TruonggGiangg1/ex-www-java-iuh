import { useState } from 'react';
import Section from '../components/ui/Section.jsx';

function CMS() {
  const [draft, setDraft] = useState('');
  const [published, setPublished] = useState([]);

  const handlePublish = (event) => {
    event.preventDefault();
    if (!draft.trim()) return;
    setPublished((prev) => [{ id: Date.now(), content: draft }, ...prev]);
    setDraft('');
  };

  return (
    <main>
      <Section
        title="Content management"
        subtitle="Publish new lessons, assignments, and announcements to the learning service. Data flows to other services via our SOA message broker."
      >
        <form onSubmit={handlePublish} style={{ display: 'grid', gap: '1rem' }}>
          <textarea
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Write a new announcement or lesson summary"
            style={{
              minHeight: '140px',
              padding: '1rem',
              borderRadius: '0.75rem',
              border: '1px solid rgba(148, 163, 184, 0.6)',
              fontFamily: 'inherit'
            }}
          />
          <button
            type="submit"
            style={{
              justifySelf: 'flex-end',
              padding: '0.8rem 1.5rem',
              borderRadius: '9999px',
              border: 'none',
              background: '#2563eb',
              color: 'white',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Publish
          </button>
        </form>

        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ color: '#0f172a' }}>Recent publications</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '1rem' }}>
            {published.length === 0 && (
              <li style={{ color: '#64748b' }}>No content published yet.</li>
            )}
            {published.map((item) => (
              <li
                key={item.id}
                style={{
                  padding: '1rem 1.25rem',
                  background: 'white',
                  borderRadius: '0.75rem',
                  border: '1px solid rgba(148, 163, 184, 0.3)'
                }}
              >
                {item.content}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </main>
  );
}

export default CMS;
