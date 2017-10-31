from __future__ import division
from flask import Flask, render_template, request, jsonify
import numpy as np
import pandas as pd
import sys

sys.path.insert(0, '/home/ubuntu/outrunJulesVerne/src')
data_dir ='/home/ubuntu/outrunJulesVerne/src'
from output import output


from recommend import sample_df, make_tour
from plot_rec import plot_map

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/input', methods=['POST'])
def get_topics():

    unique_n = np.random.randint(10000000000)

    user_data = request.json
    input_topics = np.where(user_data['topics'])[0]
    tour_io, _, tour, map_ = output(input_topics, unique_n)
    #results = {'tour_results' : tour_io.getvalue(), 'map_results' : map_io.getvalue()}
    #return jsonify(results)
    #return map_io.getvalue(), 200, {'Content-Type':'image/png'}
    tour_table = tour_io.getvalue()

    return render_template('results.html', map_url = "static/img/map{}.png".format(unique_n), tour_html = tour_table)

if __name__ == '__main__':
    n_user = 0
    app.run(host='0.0.0.0', threaded=True)
