from __future__ import division
from flask import Flask, render_template, request, jsonify
import numpy as np
import pandas as pd
import sys

sys.path.insert(0, '/Users/isabellelee/Desktop/data_science/capstone/src')
data_dir ='/Users/isabellelee/Desktop/data_science/capstone/data'
from output import output


from recommend import sample_df, make_tour
from plot_rec import plot_map

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/input', methods=['POST'])
def get_topics():
    user_data = request.json
    input_topics = np.where(user_data['topics'])[0]
    tour_io, map_io, tour, map_ = output(input_topics)
    #results = {'tour_results' : tour_io.getvalue(), 'map_results' : map_io.getvalue()}
    #return jsonify(results)
    #return map_io.getvalue(), 200, {'Content-Type':'image/png'}
    return tour_io.getvalue()

if __name__ == '__main__':
    app.run(host='0.0.0.0', threaded=True)
