function formatCurrency(value) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0
  }).format(value);
}

function Price({ value, highlight = false }) {
  return (
    <span
      style={{
        fontWeight: highlight ? 700 : 600,
        color: highlight ? '#dc2626' : '#0f172a',
        fontSize: highlight ? '1.75rem' : '1.1rem'
      }}
    >
      {formatCurrency(value)}
    </span>
  );
}

export default Price;
