import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import sys
import StringIO
data_dir ='/Users/isabellelee/Desktop/data_science/capstone/data'

from recommend import sample_df, make_tour
from plot_rec import plot_map

def output(user_input):
    world = pd.read_pickle(data_dir+"/jules_world.pkl")
    tour = make_tour(world,user_input)
    map_ = plot_map(tour)
    tour = tour[['continent','country','attraction']]

    tour_io = StringIO.StringIO()
    map_io = StringIO.StringIO()
    tour.to_html(buf=tour_io, index=False)
    plt.savefig(map_io)
    return tour_io, map_io, tour, map_

if __name__ == "__main__":
    tour, map_ = output([1,4,19])
