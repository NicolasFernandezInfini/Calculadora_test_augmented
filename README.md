# Calculadora Test Augmented

A simple calculator application with a React frontend and Flask backend.

## Project Structure

- `src/` - React frontend components
- `app.py` - Flask backend server
- `requirements.txt` - Python dependencies

## Setup Instructions

### Backend

1. Install Python dependencies:
   ```
   pip install -r requirements.txt
   ```

2. Run the Flask server:
   ```
   python app.py
   ```

### Frontend

1. Install Node.js dependencies:
   ```
   npm install
   ```

2. Start the React development server:
   ```
   npm start
   ```

## Usage

1. Start both the backend and frontend servers
2. Open your browser to http://localhost:3000
3. Use the calculator interface to perform calculations

## API

The backend provides a single endpoint:

- `POST /calculate` - Accepts a JSON object with an `expression` field and returns the calculated result
