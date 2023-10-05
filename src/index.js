import React from 'react';
import ReactDOM from 'react-dom/client';
// Import to App - 
import App from './App';
// Imports for Cascading Style Sheets 
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
