import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { useStore } from '../context/StoreContext.jsx';
import Section from '../components/ui/Section.jsx';
import Price from '../components/ui/Price.jsx';

function Catalog() {
  const { courses, categories, addToCart, status, error, refresh } = useStore();
  const isLoading = status === 'loading';
  const hasError = status === 'error';
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCourses = useMemo(() => {
    if (selectedCategory === 'all') {
      return courses;
    }
    return courses.filter((course) => course.category === selectedCategory);
  }, [courses, selectedCategory]);

  return (
    <main>
      <Section
        title="Course catalog"
        subtitle="Choose the path that matches your goals. Every course includes live lessons, homework, and analytics."
        actions={
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '9999px',
                border: '1px solid rgba(148, 163, 184, 0.6)',
                background: selectedCategory === 'all' ? '#2563eb' : 'white',
                color: selectedCategory === 'all' ? 'white' : '#0f172a',
                cursor: 'pointer'
              }}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '0.6rem 1.25rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(148, 163, 184, 0.6)',
                  background: selectedCategory === category ? '#2563eb' : 'white',
                  color: selectedCategory === category ? 'white' : '#0f172a',
                  cursor: 'pointer'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        }
      >
        {hasError && courses.length === 0 ? (
          <div style={{ display: 'grid', gap: '1rem' }}>
            <p role="alert" style={{ color: '#b91c1c', margin: 0 }}>
              We could not load the course catalog. {error?.message}
            </p>
            <button
              type="button"
              onClick={refresh}
              style={{
                justifySelf: 'flex-start',
                padding: '0.6rem 1.25rem',
                borderRadius: '9999px',
                border: '1px solid #1d4ed8',
                background: 'white',
                color: '#1d4ed8',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Try again
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gap: '1.5rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
            }}
          >
            {isLoading && courses.length === 0 ? (
              <p style={{ gridColumn: '1 / -1' }}>Loading catalog...</p>
            ) : (
              filteredCourses.map((course) => (
                <article key={course.id} style={{ background: 'white', borderRadius: '1rem', padding: '1.75rem', border: '1px solid rgba(148, 163, 184, 0.4)' }}>
                  <header style={{ marginBottom: '1rem' }}>
                    <h3 style={{ margin: 0, color: '#0f172a', fontSize: '1.4rem' }}>{course.title}</h3>
                    <p style={{ color: '#64748b', marginTop: '0.25rem' }}>{course.description}</p>
                  </header>
                  <ul style={{ paddingLeft: '1.25rem', color: '#475569', minHeight: '100px' }}>
                    {course.syllabus.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.25rem' }}>
                    <Price value={course.price} highlight />
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <button
                        type="button"
                        onClick={() => addToCart(course)}
                        style={{
                          padding: '0.6rem 1.25rem',
                          borderRadius: '9999px',
                          border: '1px solid #1d4ed8',
                          background: 'white',
                          color: '#1d4ed8',
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}
                      >
                        Add to cart
                      </button>
                      <Link
                        to={`/course/${course.id}`}
                        style={{
                          padding: '0.6rem 1.25rem',
                          borderRadius: '9999px',
                          background: '#1d4ed8',
                          color: 'white',
                          fontWeight: 600
                        }}
                      >
                        View
                      </Link>
                    </div>
                  </footer>
                </article>
              ))
            )}
          </div>
        )}
      </Section>
    </main>
  );
}

export default Catalog;
