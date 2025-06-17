const Loader = () => {
  return (
    <div style={styles.loaderContainer}>
      <div style={styles.spinner}></div>
      <p style={styles.text}>Loading portfolio...</p>
    </div>
  );
};

const styles = {
  loaderContainer: {
    height: '100vh',
    width: '100%',
    background: '#0d0d0d',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    zIndex: 1000,
  },
  spinner: {
    width: '60px',
    height: '60px',
    border: '6px solid rgba(255, 255, 255, 0.2)',
    borderTop: '6px solid #ff014f',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  text: {
    marginTop: '1rem',
    fontSize: '18px',
    color: '#bbb',
    letterSpacing: '1px',
  },
};

export default Loader;
