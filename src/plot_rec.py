import pandas as pd
import numpy as np
from mpl_toolkits.basemap import Basemap
import matplotlib.pyplot as plt

def plot_map(list_lon, list_lat):
    fig = plt.figure(figsize=(18,8))
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

def list_locations(list_df):
    lon = list(list_df.longitude)
    lat = list(list_df.latitude)
    return lon, lat

def sample_rand(world):
    oceania = world[world.continent == 'oceania']
    asia = world[world.continent == 'asia']
    na = world[world.continent == 'na']
    sa = world[world.continent == 'sa']
    africa = world[world.continent == 'africa']
    europe = world[world.continent == 'europe']
    sample_oceania = oceania.sample(n=2)
    sample_asia = asia.sample(n=2)
    sample_africa = africa.sample(n=2)
    sample_na = na.sample(n=1)
    sample_sa = sa.sample(n=1)
    sample_europe = europe.sample(n=3)
    df_sampled = sample_oceania
    df_sampled = df_sampled.append(sample_asia).append(sample_africa).append(sample_na).append(sample_sa).append(sample_europe)
    df_sampled = df_sampled.sort_values('longitude')
    return df_sampled
