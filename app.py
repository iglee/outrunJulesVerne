from __future__ import division
from flask import Flask, render_template, request, jsonify
import numpy as np

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/input', methods=['POST'])
def get_topics():
    user_data = request.json
    input_topics = np.where(user_data['topics'])[0]

    return str(input_topics)




if __name__ == '__main__':
    app.run(host='0.0.0.0', threaded=True)
