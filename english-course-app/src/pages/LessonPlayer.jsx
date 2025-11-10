import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CourseApi from '../api/client.js';
import Section from '../components/ui/Section.jsx';

function LessonPlayer() {
  const { lessonId } = useParams();
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadLesson() {
      setLoading(true);
      setError(null);

      try {
        const data = await CourseApi.getLessonById(lessonId);
        if (!cancelled) {
          setLesson(data);
        }
      } catch (primaryError) {
        if (cancelled) {
          return;
        }

        try {
          const lessons = await CourseApi.getLessons();
          const fallback = lessons.find((item) => item.id === lessonId) ?? lessons[0] ?? null;

          if (!cancelled) {
            if (fallback) {
              setLesson(fallback);
              setError(null);
            } else {
              setError(primaryError);
            }
          }
        } catch (fallbackError) {
          if (!cancelled) {
            setError(fallbackError);
          }
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadLesson();

    return () => {
      cancelled = true;
    };
  }, [lessonId]);

  if (loading) {
    return <p>Loading lesson...</p>;
  }

  if (error) {
    return (
      <p role="alert" style={{ color: '#b91c1c' }}>
        Unable to load lesson data right now. {error.message}
      </p>
    );
  }

  if (!lesson) {
    return <p role="alert">Lesson not found.</p>;
  }

  return (
    <main>
      <Section title={lesson.title} subtitle="Stream the live lesson, take notes, and upload your practice files.">
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <video
            key={lesson.mediaUrl}
            controls
            style={{ width: '100%', borderRadius: '1rem', border: '1px solid rgba(148, 163, 184, 0.4)' }}
          >
            <source src={lesson.mediaUrl} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
          <article
            style={{
              background: 'white',
              borderRadius: '1rem',
              border: '1px solid rgba(148, 163, 184, 0.3)',
              padding: '1.5rem'
            }}
          >
            <h3 style={{ marginTop: 0 }}>Lesson transcript</h3>
            <p style={{ color: '#475569' }}>{lesson.transcript}</p>
          </article>
          <form style={{ display: 'grid', gap: '1rem' }}>
            <label style={{ fontWeight: 600, color: '#0f172a' }}>
              Upload speaking assignment
              <input type="file" style={{ marginTop: '0.5rem' }} />
            </label>
            <textarea
              placeholder="Write your lesson notes here"
              style={{
                minHeight: '120px',
                padding: '1rem',
                borderRadius: '0.75rem',
                border: '1px solid rgba(148, 163, 184, 0.5)',
                fontFamily: 'inherit'
              }}
            />
            <button
              type="button"
              style={{
                justifySelf: 'flex-end',
                padding: '0.75rem 1.5rem',
                borderRadius: '9999px',
                background: '#2563eb',
                color: 'white',
                border: 'none',
                fontWeight: 600
              }}
            >
              Save progress
            </button>
          </form>
        </div>
      </Section>
    </main>
  );
}

export default LessonPlayer;
