import { Link } from 'react-router-dom';
import Section from '../components/ui/Section.jsx';
import { useStore } from '../context/StoreContext.jsx';
import Price from '../components/ui/Price.jsx';

function Dashboard() {
  const { currentUser, courses } = useStore();
  const enrolledCourses = courses.slice(0, 2);

  return (
    <main>
      <Section
        title={`Welcome back, ${currentUser?.name ?? 'learner'}`}
        subtitle="Continue your lessons, access homework, and monitor progress across skills."
      >
        <div
          style={{
            display: 'grid',
            gap: '1.5rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
          }}
        >
          {enrolledCourses.map((course) => (
            <article key={course.id} style={{ background: 'white', borderRadius: '1rem', padding: '1.5rem', border: '1px solid rgba(148, 163, 184, 0.3)' }}>
              <h3 style={{ marginTop: 0 }}>{course.title}</h3>
              <p style={{ color: '#64748b' }}>{course.description}</p>
              <Price value={course.price} />
              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem' }}>
                <Link
                  to={`/dashboard/lessons/${course.lessons[0].id}`}
                  style={{
                    padding: '0.6rem 1.2rem',
                    borderRadius: '9999px',
                    background: '#2563eb',
                    color: 'white',
                    fontWeight: 600
                  }}
                >
                  Resume lesson
                </Link>
                <Link to="/assessment" style={{ alignSelf: 'center', color: '#2563eb', fontWeight: 500 }}>
                  Take assessment
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}

export default Dashboard;
