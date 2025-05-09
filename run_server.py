"""
Flask Server Runner

This script provides a convenient way to start the Flask server for the calculator API.
It imports the Flask application from app.py and runs it with debug mode enabled.

Usage:
    python run_server.py
"""

from app import app

if __name__ == '__main__':
    # Print a message to indicate the server is starting
    print("Starting Flask server on http://localhost:5000")

    # Run the Flask application in debug mode on port 5000
    # Debug mode will automatically reload the server when code changes are detected
    app.run(debug=True, port=5000)
