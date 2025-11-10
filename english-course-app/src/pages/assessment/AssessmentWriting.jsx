import { useState } from 'react';
import Section from '../../components/ui/Section.jsx';

function AssessmentWriting() {
  const [response, setResponse] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <Section
        title="Writing assessment"
        subtitle="Write at least 150 words in response to the task. Our reviewers will return annotated feedback within 24 hours."
      >
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
          style={{ display: 'grid', gap: '1rem' }}
        >
          <p style={{ color: '#475569' }}>
            Task: Some people believe that online learning can fully replace traditional classrooms. Discuss both views and give your opinion.
          </p>
          <textarea
            value={response}
            onChange={(event) => setResponse(event.target.value)}
            placeholder="Write your essay here"
            minLength={150}
            required
            style={{
              minHeight: '220px',
              padding: '1rem',
              borderRadius: '1rem',
              border: '1px solid rgba(148, 163, 184, 0.4)',
              fontFamily: 'inherit'
            }}
          />
          <button
            type="submit"
            style={{
              justifySelf: 'flex-start',
              padding: '0.85rem 1.5rem',
              borderRadius: '9999px',
              background: '#2563eb',
              color: 'white',
              border: 'none',
              fontWeight: 600
            }}
          >
            Submit writing
          </button>
        </form>

        {submitted && (
          <p style={{ marginTop: '1rem', fontWeight: 600 }}>
            Submission received! Feedback will be delivered to your dashboard.
          </p>
        )}
      </Section>
    </main>
  );
}

export default AssessmentWriting;
