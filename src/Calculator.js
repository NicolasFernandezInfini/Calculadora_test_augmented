import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('');
  const [error, setError] = useState('');

  const handleClick = (value) => {
    setError('');
    if (value === '=') {
      calculate();
    } else if (value === 'C') {
      setDisplay('');
    } else {
      setDisplay(display + value);
    }
  };

  const calculate = async () => {
    try {
      const response = await fetch('http://localhost:5000/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ expression: display }),
      });
      
      const data = await response.json();
      
      if (data.error) {
        setError(data.error);
      } else {
        setDisplay(data.result.toString());
      }
    } catch (err) {
      setError('Error connecting to server');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      {error && <div className="error">{error}</div>}
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>
        
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>
        
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>
        
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('+')}>+</button>
        
        <button className="clear" onClick={() => handleClick('C')}>C</button>
      </div>
    </div>
  );
}

export default Calculator;
