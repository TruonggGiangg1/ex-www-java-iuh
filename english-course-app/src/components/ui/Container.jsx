const styles = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 1.5rem 3rem'
};

function Container({ children }) {
  return <div style={styles}>{children}</div>;
}

export default Container;
