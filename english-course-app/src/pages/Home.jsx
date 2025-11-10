import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext.jsx';
import Section from '../components/ui/Section.jsx';
import Timer from '../components/ui/Timer.jsx';
import Price from '../components/ui/Price.jsx';

function CourseCard({ course }) {
  return (
    <article
      style={{
        border: '1px solid rgba(148, 163, 184, 0.4)',
        borderRadius: '1rem',
        overflow: 'hidden',
        background: 'white',
        boxShadow: '0 20px 45px -30px rgba(30, 64, 175, 0.25)'
      }}
    >
      <img src={course.thumbnail} alt="Course" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <div style={{ padding: '1.5rem', display: 'grid', gap: '0.75rem' }}>
        <span style={{ fontWeight: 600, color: '#2563eb' }}>{course.level}</span>
        <h3 style={{ margin: 0, fontSize: '1.5rem', color: '#0f172a' }}>{course.title}</h3>
        <p style={{ color: '#475569' }}>{course.description}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Price value={course.price} />
          <span style={{ color: '#f59e0b', fontWeight: 600 }}>⭐ {course.rating.toFixed(1)}</span>
        </div>
        <Link
          to={`/course/${course.id}`}
          style={{
            padding: '0.75rem 1.25rem',
            borderRadius: '9999px',
            background: '#1d4ed8',
            color: 'white',
            fontWeight: 600,
            textAlign: 'center'
          }}
        >
          Explore course
        </Link>
      </div>
    </article>
  );
}

function Home() {
  const { featured, status, error } = useStore();
  const isLoading = status === 'loading';
  const hasError = status === 'error';
  const offerEnds = new Date();
  offerEnds.setDate(offerEnds.getDate() + 4);

  return (
    <main>
      <Section
        title="Live English classes, right in your browser"
        subtitle="Build speaking confidence with interactive lessons, instant feedback, and adaptive exercises designed by expert teachers."
        actions={
          <Link
            to="/catalog"
            style={{
              padding: '0.85rem 1.5rem',
              borderRadius: '9999px',
              fontWeight: 600,
              background: '#2563eb',
              color: 'white'
            }}
          >
            Browse courses
          </Link>
        }
      >
        {hasError ? (
          <p role="alert" style={{ color: '#b91c1c' }}>
            Unable to load featured courses right now. {error?.message}
          </p>
        ) : (
          <div
            style={{
              display: 'grid',
              gap: '1.5rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
            }}
          >
            {isLoading && featured.length === 0 ? (
              <p style={{ gridColumn: '1 / -1' }}>Loading curated courses...</p>
            ) : (
              featured.map((course) => <CourseCard key={course.id} course={course} />)
            )}
          </div>
        )}
      </Section>

      <Section
        title="Flash sale - 35% off all live classes"
        subtitle="Secure unlimited access to live classrooms, homework tracking, and AI practice partners before the offer runs out."
      >
        <Timer targetDate={offerEnds} />
      </Section>

      <Section
        title="Everything you need to master English"
        subtitle="Our platform is built with a service-oriented architecture so each feature scales with your organization."
      >
        <div
          style={{
            display: 'grid',
            gap: '1.5rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))'
          }}
        >
          {[{
            title: 'Live classrooms',
            description: 'Join immersive live sessions with certified tutors and real classmates.'
          },
          {
            title: 'Homework tracking',
            description: 'Complete assignments with auto-graded exercises and speaking uploads.'
          },
          {
            title: 'Skill analytics',
            description: 'Visualize your progress across listening, speaking, reading, and writing.'
          },
          {
            title: 'SOA integrations',
            description: 'Connect to your CRM, payment, and content services securely.'
          }].map((item) => (
            <div
              key={item.title}
              style={{
                background: 'white',
                padding: '1.5rem',
                borderRadius: '1rem',
                border: '1px solid rgba(148, 163, 184, 0.3)',
                boxShadow: '0 24px 40px -32px rgba(15, 23, 42, 0.35)'
              }}
            >
              <h3 style={{ marginTop: 0, color: '#0f172a' }}>{item.title}</h3>
              <p style={{ color: '#475569' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}

export default Home;
