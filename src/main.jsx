import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>👋 Welcome to VetConnect</h1>
      <p>This is your live site, fully working.</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);