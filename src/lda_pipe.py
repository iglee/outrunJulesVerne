import pandas as pd
import numpy as np

import pyspark as ps
from pyspark.ml.clustering import LDA
import boto3

def save_to_s3(filename, path):
    s3 = boto3.client('s3')
    s3.upload_file(Filename=filename, Bucket='outrunjulesverne',\
                    Key=path)

def lda_model_score(df,num_topics):
    lda = LDA(k=num_topics, optimizer="em")
    model = lda.fit(df)
    topics = model.describeTopics(maxTermsPerTopic=30).collect()
    transformed = model.transform(df)
    return lda, model, topics, transformed

def print_topics(topics, ls):
    for topic in topics:
        print("- TOPIC {} -".format(topic[0]))
        topickeys = topic[1]
        topicvalues = topic[2]
        for i in range(len(topickeys)):
            print("  - word '{}': {}".format(ls[topickeys[i]],topicvalues[i]))

def to_pickle(df, filename):
    p = df.toPandas()
    p.to_pickle(filename)
    return p
