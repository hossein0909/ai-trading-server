from flask import Flask, jsonify
import random
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def home():
    return "AI Server Online"

@app.route('/health')
def health():
    return jsonify({"status": "active"})

@app.route('/predict')
def predict():
    signal = random.randint(0, 2)
    return jsonify({
        "signal": signal,
        "confidence": 0.85
    })

if __name__ == '__main__':
    app.run()
