# Calculadora Test Augmented

A simple calculator application with a React frontend and Flask backend. This project demonstrates a basic web application architecture with a separate frontend and backend.

![Calculator Screenshot](https://via.placeholder.com/400x300?text=Calculator+Screenshot)

## Features

- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Clean, responsive user interface
- Error handling for invalid expressions
- Separation of concerns between frontend and backend
- Standalone version that works without a backend

## Project Structure

```
calculadora_test_augmented/
├── public/                 # Public assets for React
│   └── index.html          # HTML entry point
├── src/                    # React frontend components
│   ├── App.js              # Main React component
│   ├── App.css             # Styles for App component
│   ├── Calculator.js       # Calculator component
│   ├── Calculator.css      # Styles for Calculator component
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── standalone/             # Standalone version (HTML/CSS/JS only)
│   └── index.html          # Self-contained calculator
├── app.py                  # Flask backend server
├── run_server.py           # Helper script to run the Flask server
├── requirements.txt        # Python dependencies
├── package.json            # Node.js dependencies
└── README.md               # Project documentation
```

## Technologies Used

### Frontend
- React.js - UI library
- CSS - Styling

### Backend
- Flask - Python web framework
- Flask-CORS - Cross-Origin Resource Sharing support

## Setup Instructions

### Prerequisites
- Python 3.6 or higher
- Node.js 12 or higher
- npm (comes with Node.js)

### Backend Setup

1. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Run the Flask server:
   ```bash
   python run_server.py
   ```

   The server will start on http://localhost:5000

### Frontend Setup

1. Install Node.js dependencies:
   ```bash
   npm install
   ```

2. Start the React development server:
   ```bash
   npm start
   ```

   The development server will start on http://localhost:3000

## Standalone Version

If you don't want to set up the full stack, you can use the standalone version:

1. Navigate to the `standalone` directory
2. Start a simple HTTP server:
   ```bash
   # Python 3
   python -m http.server 8000
   ```
3. Open your browser to http://localhost:8000

The standalone version performs calculations directly in the browser without needing the Flask backend.

## Usage

1. Start both the backend and frontend servers as described above
2. Open your browser to http://localhost:3000
3. Enter a mathematical expression using the calculator buttons
4. Press "=" to calculate the result
5. Press "C" to clear the calculator

## API Documentation

The backend provides a single endpoint:

### Calculate Endpoint

- **URL**: `/calculate`
- **Method**: `POST`
- **Content-Type**: `application/json`
- **Request Body**:
  ```json
  {
    "expression": "2+2"
  }
  ```
- **Success Response**:
  - **Code**: 200
  - **Content**:
    ```json
    {
      "result": 4
    }
    ```
- **Error Response**:
  - **Code**: 400
  - **Content**:
    ```json
    {
      "error": "Error message"
    }
    ```

## Security Considerations

- The backend uses `eval()` to evaluate expressions, which is not secure for production use. In a real application, you should use a proper expression parser.
- The standalone version uses `Function()` constructor, which is slightly better than `eval()` but still not completely secure.

## Future Improvements

- Add more advanced calculator functions (square root, exponents, etc.)
- Implement proper expression parsing instead of using eval()
- Add unit tests for both frontend and backend
- Improve error handling and validation
- Add keyboard support

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Nicolás Fernández - [GitHub](https://github.com/NicolasFernandezInfini)
