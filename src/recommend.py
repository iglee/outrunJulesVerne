import pandas as pd
import numpy as np
from geopy.distance import vincenty
from itertools import izip

max_vincenty = 20036

#world = pd.read_pickle('../data/total_everything_world.pkl')

#after you get a user input in the form of a list: (call it lst_topics)

def lda_scores(x, lst_topics=[0, 4, 7]):
    total_score = []
    for i in lst_topics:
        total_score.append(x[i])
    total_score = np.array(total_score)
    return total_score.sum()/len(total_score)

def take_user_input(world, input_ls):
    world['lda_score'] = world.topicDistribution.apply(lambda x: \
                                                       lda_scores(x,lst_topics= input_ls))
    return world

def initialize_tour(world, user_input):
    sample_asia, sample_africa, sample_europe, sample_na, sample_sa, sample_oceania = sample_df(world, user_input)
    tour = pd.DataFrame()
    tour_asia = sample_asia.sample(n=2)
    sample_asia = sample_asia.drop(tour_asia.index)
    tour_africa = sample_africa.sample(n=2)
    sample_africa = sample_africa.drop(tour_africa.index)
    tour_europe = sample_europe.sample(n=3)
    sample_europe = sample_europe.drop(tour_europe.index)
    tour_na = sample_na.sample(n=1)
    sample_na = sample_na.drop(tour_na.index)
    tour_sa = sample_sa.sample(n=1)
    sample_sa = sample_sa.drop(tour_sa.index)
    tour_oceania = sample_oceania.sample(n=1)
    sample_oceania = sample_oceania.drop(tour_oceania.index)
    tour = tour.append(tour_asia).append(tour_africa).append(tour_europe)\
               .append(tour_na).append(tour_sa).append(tour_oceania)
    return tour.sort_values('longitude'), sample_asia, sample_africa, sample_europe, sample_na, sample_sa, sample_oceania


def new_tour(tour, sample_asia, sample_africa, sample_europe, sample_na, sample_sa, sample_oceania):
    #sample from tour
    s = tour.sample(n=1)
    #new sample from the same continent as s
    x= 'sample_'+ s.continent.values[0]
    s_x = eval(x).sample(n=1)
    #replace s with s_x to make new tour
    newtour = tour.loc[:s.index.values[0]][:-1].append(s_x)\
                    .append(tour.loc[s.index.values[0]:][1:])
    #put s back in its continent
    vars()[x] = eval(x).drop(s_x.index).append(s)
    newtour = newtour.sort_values('longitude')
    return newtour, sample_asia, sample_africa, sample_europe, sample_na, sample_sa, sample_oceania





def sample_df(world, user_input):
    world = take_user_input(world, user_input)
    oceania = world[world.continent == "oceania"]
    na = world[world.continent == "na"]
    sa = world[world.continent == "sa"]
    africa = world[world.continent == "africa"]
    asia = world[world.continent == "asia"]
    europe = world[world.continent == "europe"]

    sample_oceania = oceania.sort_values('lda_score', ascending = False)[:10]
    sample_na = na.sort_values('lda_score', ascending = False)[:10]
    sample_sa = sa.sort_values('lda_score', ascending = False)[:10]
    sample_africa = africa.sort_values('lda_score', ascending = False)[:10]
    sample_asia = asia.sort_values('lda_score', ascending = False)[:10]
    sample_europe = europe.sort_values('lda_score', ascending = False)[:10]

    return sample_asia, sample_africa, sample_europe, sample_na, sample_sa, sample_oceania

def make_tour(world, user_input):
    sample_asia, sample_africa, sample_europe, sample_na, sample_sa, sample_oceania = sample_df(world, user_input)
    tour = pd.DataFrame()
    tour_asia = sample_asia.sample(n=2)
    tour_africa = sample_africa.sample(n=2)
    tour_europe = sample_europe.sample(n=3)
    tour_na = sample_na.sample(n=1)
    tour_sa = sample_sa.sample(n=1)
    tour_oceania = sample_oceania.sample(n=1)
    tour = tour.append(tour_asia).append(tour_africa).append(tour_europe)\
               .append(tour_na).append(tour_sa).append(tour_oceania)
    return tour.sort_values('longitude')

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


#so, by continent, we would have 10 nodes
#europe = 3
#africa = 1
#na = 1
#sa = 1
#asia = 2
#oceania = 2
