import { useState } from 'react';
import Section from '../../components/ui/Section.jsx';

const QUESTIONS = [
  {
    id: 1,
    prompt: 'Choose the correct sentence',
    choices: ['She go to class every day.', 'She goes to class every day.', 'She going to class every day.'],
    answer: 1
  },
  {
    id: 2,
    prompt: 'Select the best word: "We look ____ to meeting you."',
    choices: ['up', 'forward', 'around'],
    answer: 1
  }
];

function AssessmentQuiz() {
  const [responses, setResponses] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = Object.entries(responses).reduce((sum, [questionId, choiceIndex]) => {
    const question = QUESTIONS.find((item) => item.id.toString() === questionId);
    return question?.answer === Number(choiceIndex) ? sum + 1 : sum;
  }, 0);

  return (
    <main>
      <Section title="Assessment quiz" subtitle="Answer the questions to measure your grammar accuracy.">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
          style={{ display: 'grid', gap: '1.5rem' }}
        >
          {QUESTIONS.map((question) => (
            <fieldset key={question.id} style={{ border: '1px solid rgba(148, 163, 184, 0.3)', borderRadius: '1rem', padding: '1.5rem' }}>
              <legend style={{ fontWeight: 600 }}>{question.prompt}</legend>
              <div style={{ display: 'grid', gap: '0.5rem', marginTop: '0.75rem' }}>
                {question.choices.map((choice, index) => (
                  <label key={choice} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={index}
                      checked={responses[question.id] === index}
                      onChange={() =>
                        setResponses((prev) => ({
                          ...prev,
                          [question.id]: index
                        }))
                      }
                    />
                    {choice}
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
          <button
            type="submit"
            style={{
              justifySelf: 'flex-start',
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              background: '#2563eb',
              color: 'white',
              border: 'none',
              fontWeight: 600
            }}
          >
            Submit answers
          </button>
        </form>

        {submitted && (
          <p style={{ marginTop: '1rem', fontWeight: 600 }}>
            You scored {score} out of {QUESTIONS.length}.
          </p>
        )}
      </Section>
    </main>
  );
}

export default AssessmentQuiz;
