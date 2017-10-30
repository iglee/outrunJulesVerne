import pandas as pd
import numpy as np
from geopy.distance import vincenty
from itertools import izip

max_vincenty = 20036

world = pd.read_pickle('../data/total_everything_world.pkl')

#after you get a user input in the form of a list: (call it lst_topics)

def lda_scores(x, lst_topics=[0, 4, 7]):
    total_score = []
    for i in lst_topics:
        total_score.append(x[i])
    total_score = np.array(total_score)
    return total_score.sum()/len(total_score)

#world['lda_score'] = world.topicDistribution.apply(lda_scores)

def first_recommendation(world):
    return world.sort_values('lda_score', ascending=False)[:1]

def distance_btw_recommendations(x,y):
    return vincenty(x,y).km/max_vincenty

def extract_loc(i,j, df_sampled):
    x = (df_sampled.iloc[i].latitude, df_sampled.iloc[i].longitude)
    y = (df_sampled.iloc[j].latitude, df_sampled.iloc[j].longitude)
    return x, y

def total_distance(df_sampled, tour):
    d = 0
    for i in izip(tour[:-1], tour[1:]):
        x,y = extract_loc(i[0],i[1], df_sampled)
        d+=distance_btw_recommendations(x,y)
    return d

def take_user_input(world, input_ls):
    world['lda_score'] = world.topicDistribution.apply(lambda x: \
                                                       lda_scores(x,lst_topics= input_ls))
    return world
#so, by continent, we would have 10 nodes
#europe = 3
#africa = 1
#na = 1
#sa = 1
#asia = 2
#oceania = 2
