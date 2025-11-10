import useCountdown from '../../hooks/useCountdown.js';

const segmentStyle = {
  display: 'grid',
  gap: '0.25rem',
  justifyItems: 'center',
  padding: '0.75rem 1rem',
  background: 'rgba(37, 99, 235, 0.08)',
  borderRadius: '0.75rem',
  minWidth: '80px'
};

function TimeSegment({ label, value }) {
  return (
    <div style={segmentStyle}>
      <span style={{ fontSize: '1.75rem', fontWeight: 700 }}>{value.toString().padStart(2, '0')}</span>
      <span style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.08em' }}>
        {label}
      </span>
    </div>
  );
}

function Timer({ targetDate }) {
  const { days, hours, minutes, seconds, hasEnded } = useCountdown(targetDate);

  if (hasEnded) {
    return <p style={{ color: '#0f172a', fontWeight: 600 }}>The promotion has ended.</p>;
  }

  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}
    >
      <TimeSegment label="Days" value={days} />
      <TimeSegment label="Hours" value={hours} />
      <TimeSegment label="Minutes" value={minutes} />
      <TimeSegment label="Seconds" value={seconds} />
    </div>
  );
}

export default Timer;
