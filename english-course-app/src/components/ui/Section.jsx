function Section({ title, subtitle, children, actions }) {
  return (
    <section style={{ margin: '4rem 0' }}>
      <header style={{ marginBottom: '1.5rem' }}>
        <h2
          style={{
            fontSize: '2rem',
            marginBottom: '0.5rem',
            color: '#0f172a'
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p style={{ color: '#475569', maxWidth: '60ch' }}>{subtitle}</p>
        )}
        {actions && <div style={{ marginTop: '1rem' }}>{actions}</div>}
      </header>
      <div>{children}</div>
    </section>
  );
}

export default Section;
