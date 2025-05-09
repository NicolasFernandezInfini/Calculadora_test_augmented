from app import app

if __name__ == '__main__':
    print("Starting Flask server on http://localhost:5000")
    app.run(debug=True, port=5000)
