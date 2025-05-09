/**
 * Calculator Component
 *
 * This component provides a calculator interface with buttons for numbers and operations.
 * It communicates with a backend API to perform calculations.
 *
 * @module Calculator
 */

import React, { useState } from 'react';
import './Calculator.css';

/**
 * Calculator component function
 *
 * Renders a calculator with a display, error message area, and buttons for input
 *
 * @returns {JSX.Element} The rendered Calculator component
 */
function Calculator() {
  // State for the calculator display (input and result)
  const [display, setDisplay] = useState('');

  // State for error messages
  const [error, setError] = useState('');

  /**
   * Handles button clicks on the calculator
   *
   * @param {string} value - The value of the button clicked (number, operator, or command)
   */
  const handleClick = (value) => {
    // Clear any previous error messages
    setError('');

    if (value === '=') {
      // If equals button is pressed, calculate the result
      calculate();
    } else if (value === 'C') {
      // If clear button is pressed, reset the display
      setDisplay('');
    } else {
      // Otherwise, append the value to the display
      setDisplay(display + value);
    }
  };

  /**
   * Sends the current expression to the backend API for calculation
   * Updates the display with the result or shows an error message
   */
  const calculate = async () => {
    try {
      // Send the expression to the backend API
      const response = await fetch('http://localhost:5000/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ expression: display }),
      });

      // Parse the JSON response
      const data = await response.json();

      if (data.error) {
        // If there's an error in the response, display it
        setError(data.error);
      } else {
        // Otherwise, update the display with the result
        setDisplay(data.result.toString());
      }
    } catch (err) {
      // If there's a network error or other exception, show a generic error message
      setError('Error connecting to server');
    }
  };

  return (
    <div className="calculator">
      {/* Display area for input and results */}
      <div className="display">{display}</div>

      {/* Error message area (only shown when there is an error) */}
      {error && <div className="error">{error}</div>}

      {/* Calculator buttons grid */}
      <div className="buttons">
        {/* First row */}
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>

        {/* Second row */}
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>

        {/* Third row */}
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>

        {/* Fourth row */}
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('+')}>+</button>

        {/* Clear button (spans full width) */}
        <button className="clear" onClick={() => handleClick('C')}>C</button>
      </div>
    </div>
  );
}

export default Calculator;
