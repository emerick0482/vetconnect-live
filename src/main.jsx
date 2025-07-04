import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div>
    <h1>Welcome to VetConnect</h1>
    <p>This is the live version of your veteran platform.</p>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);