import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import sys
data_dir ='/Users/isabellelee/Desktop/data_science/capstone/data'

from recommend import sample_df, make_tour
from plot_rec import plot_map

world = pd.read_pickle(data_dir+"/jules_world.pkl")
tour = make_tour(world,[1,4,17])
map_ = plot_map(tour)

if __name__ == "__main__":
    world = pd.read_pickle(data_dir+"/jules_world.pkl")
    tour = make_tour(world,[1,4,17])
    map_ = plot_map(tour)
