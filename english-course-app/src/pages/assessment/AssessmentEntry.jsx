import { Link } from 'react-router-dom';
import Section from '../../components/ui/Section.jsx';

function AssessmentEntry() {
  return (
    <main>
      <Section
        title="Assessment center"
        subtitle="Complete quick exercises to measure your proficiency across listening, speaking, reading, and writing."
      >
        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {[{
            title: 'Speaking interview',
            to: '/assessment/speaking',
            description: 'Record answers to scenario-based prompts and receive AI scoring.'
          },
          {
            title: 'Writing task',
            to: '/assessment/writing',
            description: 'Submit essays and receive targeted feedback from teachers.'
          },
          {
            title: 'Quiz practice',
            to: '/assessment/quiz',
            description: 'Check your grammar and vocabulary with auto-graded questions.'
          }].map((item) => (
            <Link
              key={item.title}
              to={item.to}
              style={{
                padding: '1.5rem',
                borderRadius: '1rem',
                border: '1px solid rgba(148, 163, 184, 0.3)',
                background: 'white',
                color: '#0f172a',
                textDecoration: 'none'
              }}
            >
              <h3 style={{ marginTop: 0 }}>{item.title}</h3>
              <p style={{ color: '#475569' }}>{item.description}</p>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}

export default AssessmentEntry;
