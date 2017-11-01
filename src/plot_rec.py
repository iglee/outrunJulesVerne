import pandas as pd
import numpy as np
import matplotlib
matplotlib.pyplot.switch_backend('agg')

from mpl_toolkits.basemap import Basemap
import matplotlib.pyplot as plt


def list_locations(list_df):
    lon = list(list_df.longitude)
    lat = list(list_df.latitude)
    return lon, lat

def plot_map(df):
    list_lon, list_lat = list_locations(df)
    fig = plt.figure(figsize=(11,5))
    map_ = Basemap(projection='robin',resolution='c',lat_0=0,lon_0=0)
    map_.bluemarble()
    # Add some more info to the map
    cstl = map_.drawcoastlines(linewidth=.5)
    meri = map_.drawmeridians(np.arange(0,360,60), linewidth=.2, labels=[1,0,0,1], labelstyle='+/-', color='grey' )
    para = map_.drawparallels(np.arange(-90,90,30), linewidth=.2, labels=[1,0,0,1], labelstyle='+/-', color='grey')
    boun = map_.drawmapboundary(linewidth=0.5, color='grey')

    #plot points
    x,y = map_(list_lon, list_lat)
    map_.plot(x,y, 'ro', markersize=8)
    map_.plot(x,y,linewidth=2,color='r')
    return map_

def replace_(x):
    return x.replace('_',' ')

def format_table(tour):
    tour.loc[tour.continent == "na", "continent"] = "North America"
    tour.loc[tour.continent == "sa", "continent"] = "South America"
    tour.loc[tour.continent == "asia", "continent"] = "Asia"
    tour.loc[tour.continent == "oceania", "continent"] = "Oceania"
    tour.loc[tour.continent == "africa", "continent"] = "Africa"
    tour.loc[tour.continent == "europe", "continent"] = "Europe"
    tour.country = tour.country.apply(replace_)
    tour = tour.rename(columns={'continent': 'Continent', 'attraction': 'Attraction', 'country':'Country'})
    return tour[['Continent', 'Country', 'Attraction']]
