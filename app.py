"""
Calculator API Backend

This Flask application provides a simple API for evaluating mathematical expressions.
It exposes a single endpoint that accepts mathematical expressions and returns the result.

Note: This is a simple example and not intended for production use as it uses eval(),
which can be a security risk if user input is not properly sanitized.
"""

from flask import Flask, request, jsonify
from flask_cors import CORS

# Initialize Flask application
app = Flask(__name__)

# Enable Cross-Origin Resource Sharing (CORS) for all routes
# This allows the frontend to make requests to this API from a different origin
CORS(app)

@app.route('/calculate', methods=['POST'])
def calculate():
    """
    Calculate endpoint that evaluates mathematical expressions.

    Accepts: JSON with an 'expression' field containing a mathematical expression as a string
    Returns: JSON with either a 'result' field containing the calculated result,
             or an 'error' field if the calculation failed

    Example request: {"expression": "2+2"}
    Example response: {"result": 4}
    """
    data = request.json
    try:
        # Get the expression from the request data
        expression = data.get('expression', '')

        # Evaluate the expression
        # Note: eval() is used for simplicity, but is not recommended for production
        # as it can execute arbitrary code if not properly sanitized
        result = eval(expression)

        # Return the result as JSON
        return jsonify({"result": result})
    except Exception as e:
        # If an error occurs, return the error message with a 400 status code
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    # Run the Flask application in debug mode on port 5000
    app.run(debug=True, port=5000)
