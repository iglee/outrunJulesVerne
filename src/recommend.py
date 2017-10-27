import pandas as pd
import numpy as np
from geopy.distance import vincenty

max_vincenty = 20036

world = pd.read_pickle('../data/total_everything_world.pkl')

#after you get a user input in the form of a list: (call it lst_topics)
lst_topics = [4, 14, 9]

def lda_scores(x, lst_topics=[4, 14, 9]):
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

#so, by continent, we would have 10 nodes
#europe = 3
#africa = 1
#na = 1
#sa = 1
#asia = 2
#oceania = 2
