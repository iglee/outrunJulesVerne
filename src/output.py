import pandas as pd
pd.set_option('display.max_colwidth', -1)
import numpy as np
import matplotlib.pyplot as plt
import sys
import StringIO
data_dir ='/Users/isabellelee/Desktop/data_science/capstone/data'

from recommend import sample_df, make_tour
from plot_rec import plot_map, format_table

def output(user_input, unique_n):
    world = pd.read_pickle(data_dir+"/jules_world.pkl")
    tour = make_tour(world,user_input)
    map_ = plot_map(tour)
    plt.savefig("static/img/map{}.png".format(unique_n), bbox_inches = "tight")
    tour = format_table(tour)

    tour_io = StringIO.StringIO()
    map_io = StringIO.StringIO()
    tour.to_html(buf=tour_io, index=False)
    plt.savefig(map_io)
    return tour_io, map_io, tour, map_

if __name__ == "__main__":
    tour, map_ = output([1,4,19])
