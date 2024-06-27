import React from 'react';

function App() {
  const styles = {
    app: {
      textAlign: 'center',
      margin: '20px',
    },
    paragraph: {
      color: 'blue',
      fontSize: '18px',
      backgroundColor: 'lightgrey',
      padding: '10px',
      borderRadius: '5px',
    },
  };

  return (
    <div style={styles.app}>
      <p style={styles.paragraph}>
        This is a paragraph with some custom styling.
      </p>
    </div>
  );
}

export default App;
