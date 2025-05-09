from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.json
    try:
        expression = data.get('expression', '')
        result = eval(expression)  # Note: eval is used for simplicity, not recommended for production
        return jsonify({"result": result})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5000)
