import { useState } from 'react';
import Section from '../../components/ui/Section.jsx';

const PROMPTS = [
  'Describe a time when you had to solve a problem in English.',
  'Explain your favorite English book or movie and why you recommend it.'
];

function AssessmentSpeaking() {
  const [recordings, setRecordings] = useState([]);

  return (
    <main>
      <Section
        title="Speaking assessment"
        subtitle="Record responses to the prompts below. Our AI service analyzes pronunciation, fluency, and vocabulary diversity."
      >
        <ol style={{ paddingLeft: '1.25rem', color: '#475569' }}>
          {PROMPTS.map((prompt) => (
            <li key={prompt} style={{ marginBottom: '1rem' }}>
              {prompt}
            </li>
          ))}
        </ol>
        <button
          type="button"
          onClick={() => setRecordings((prev) => [...prev, { id: Date.now(), url: 'https://samplelib.com/lib/preview/mp3/sample-3s.mp3' }])}
          style={{
            padding: '0.8rem 1.5rem',
            borderRadius: '9999px',
            background: '#2563eb',
            color: 'white',
            border: 'none',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Simulate recording
        </button>

        <div style={{ marginTop: '2rem', display: 'grid', gap: '1rem' }}>
          {recordings.length === 0 && <p>No recordings yet. Click the button above to simulate an upload.</p>}
          {recordings.map((recording) => (
            <audio key={recording.id} controls>
              <source src={recording.url} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          ))}
        </div>
      </Section>
    </main>
  );
}

export default AssessmentSpeaking;
