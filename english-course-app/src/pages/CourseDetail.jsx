import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import CourseApi from '../api/client.js';
import Section from '../components/ui/Section.jsx';
import Price from '../components/ui/Price.jsx';
import { useStore } from '../context/StoreContext.jsx';

function CourseDetail() {
  const { courseId } = useParams();
  const { addToCart, courses, status } = useStore();
  const initialCourse = useMemo(() => courses.find((item) => item.id === courseId) ?? null, [courses, courseId]);
  const [course, setCourse] = useState(initialCourse);
  const [loading, setLoading] = useState(!initialCourse);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (initialCourse) {
      setCourse(initialCourse);
      setLoading(false);
    }
  }, [initialCourse]);

  useEffect(() => {
    let cancelled = false;

    if (!course && status !== 'loading') {
      setLoading(true);
      CourseApi.getCourseById(courseId)
        .then((data) => {
          if (!cancelled) {
            setCourse(data);
            setError(null);
          }
        })
        .catch((err) => {
          if (!cancelled) {
            setError(err);
          }
        })
        .finally(() => {
          if (!cancelled) {
            setLoading(false);
          }
        });
    }

    return () => {
      cancelled = true;
    };
  }, [course, courseId, status]);

  if (loading) {
    return <p>Loading course details...</p>;
  }

  if (error) {
    return (
      <p role="alert" style={{ color: '#b91c1c' }}>
        Unable to load the course right now. {error.message}
      </p>
    );
  }

  if (!course) {
    return <p role="alert">Course not found.</p>;
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
