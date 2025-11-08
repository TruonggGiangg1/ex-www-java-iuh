import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MockApi from '../api/MockApi.js';
import Section from '../components/ui/Section.jsx';
import Price from '../components/ui/Price.jsx';
import { useStore } from '../context/StoreContext.jsx';

function CourseDetail() {
  const { courseId } = useParams();
  const { addToCart } = useStore();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    MockApi.getCourseById(courseId).then(setCourse);
  }, [courseId]);

  if (!course) {
    return <p>Loading course...</p>;
  }

  return (
    <main>
      <Section title={course.title} subtitle={course.description}>
        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          <img
            src={course.thumbnail}
            alt={course.title}
            style={{ width: '100%', borderRadius: '1.25rem', boxShadow: '0 24px 40px -32px rgba(30, 58, 138, 0.4)' }}
          />
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div>
              <h3 style={{ marginBottom: '0.5rem', color: '#0f172a' }}>What you will learn</h3>
              <ul style={{ paddingLeft: '1.25rem', color: '#475569' }}>
                {course.syllabus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={{ marginBottom: '0.5rem', color: '#0f172a' }}>Lessons included</h3>
              <ul style={{ paddingLeft: '1.25rem', color: '#475569' }}>
                {course.lessons.map((lesson) => (
                  <li key={lesson.id}>
                    {lesson.title} · {lesson.duration} min
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                padding: '1.5rem',
                borderRadius: '1rem',
                background: 'white',
                border: '1px solid rgba(148, 163, 184, 0.4)'
              }}
            >
              <Price value={course.price} highlight />
              <p style={{ color: '#475569' }}>Includes lifetime access to recordings, exercises, and updates.</p>
              <button
                type="button"
                onClick={() => addToCart(course)}
                style={{
                  marginTop: '0.5rem',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '9999px',
                  border: 'none',
                  background: '#1d4ed8',
                  color: 'white',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

export default CourseDetail;
