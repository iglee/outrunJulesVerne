# this script provides methods to pipeline spark's LDA model for clustering and feature extraction

import pandas as pd
import numpy as np

import pyspark as ps
from pyspark.ml.clustering import LDA
import boto3

def save_to_s3(filename, path):
    """ periodically save the files to s3 """
    s3 = boto3.client('s3')
    s3.upload_file(Filename=filename, Bucket='outrunjulesverne',\
                    Key=path)

def lda_model_score(df,num_topics):
    """ 
    LDA pipeline: train LDA, extract topics, predict topic for each data point
    -- 
    input : df -> dataframe of reviews, num_topics -> int
    output : lda -> spark lda with initiated parameters, model -> trained spark lda, topics -> identified clustered topics, transformed -> reviews with topic predicted
    """
    lda = LDA(k=num_topics, optimizer="em") # call spark LDA, initialized by number of topics
    model = lda.fit(df) # fit model
    topics = model.describeTopics(maxTermsPerTopic=30).collect() # "describe" the topics by topic vocabulary determined by LDA
    transformed = model.transform(df) # generate predict 
    return lda, model, topics, transformed

def print_topics(topics, ls):
    """ for given LDA topics or "clusters", print vocabulary and their weights i.e. waterfall :  0.107076734088 for topic 0 """
    for topic in topics:
        print("- TOPIC {} -".format(topic[0]))
        topickeys = topic[1] # vocabulary
        topicvalues = topic[2] # corresponding vocab weight
        for i in range(len(topickeys)):
            print("  - word '{}': {}".format(ls[topickeys[i]],topicvalues[i]))

def to_pickle(df, filename):
    """ save dataframe as pickle object """
    p = df.toPandas()
    p.to_pickle(filename)
    return p
