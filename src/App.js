/**
 * Main App Component
 *
 * This is the root component of the React application.
 * It renders the header and includes the Calculator component.
 *
 * @module App
 */

import React from 'react';
import Calculator from './Calculator';
import './App.css';

/**
 * App component function
 *
 * Renders the main application container with a header and the Calculator component
 *
 * @returns {JSX.Element} The rendered App component
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Calculator</h1>
        <Calculator />
      </header>
    </div>
  );
}

export default App;
