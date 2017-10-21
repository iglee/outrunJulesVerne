from pyspark.sql.functions import udf, col
from pyspark.sql.types import ArrayType, StringType
import string
import unicodedata

import nltk

from nltk.tokenize import sent_tokenize
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
from nltk.stem.snowball import SnowballStemmer
from nltk.util import ngrams
from nltk import pos_tag
from nltk import RegexpParser

from pyspark.ml.feature import CountVectorizer
from pyspark.ml.feature import IDF

import sys

def extract_bow_from_raw_text(text_as_string):
    """Extracts bag-of-words from a raw text string.
    Parameters
    ----------
    text (str): a text document given as a string
    Returns
    -------
    list : the list of the tokens extracted and filtered from the text
    """
    if (text_as_string == None):
        return []

    if (len(text_as_string) < 1):
        return []

    if sys.version_info[0] < 3:
        nfkd_form = unicodedata.normalize('NFKD', unicode(text_as_string))
    else:
        nfkd_form = unicodedata.normalize('NFKD', str(text_as_string))

    text_input = str(nfkd_form.encode('ASCII', 'ignore'))

    sent_tokens = sent_tokenize(text_input)

    tokens = list(map(word_tokenize, sent_tokens))

    sent_tags = list(map(pos_tag, tokens))

    grammar = r"""
        SENT: {<(J|N).*>}                # chunk sequences of proper nouns
    """

    cp = RegexpParser(grammar)
    ret_tokens = list()
    stemmer_snowball = SnowballStemmer('english')

    for sent in sent_tags:
        tree = cp.parse(sent)
        for subtree in tree.subtrees():
            if subtree.label() == 'SENT':
                t_tokenlist = [tpos[0].lower() for tpos in subtree.leaves()]
                t_tokens_stemsnowball = list(map(stemmer_snowball.stem, t_tokenlist))
                #t_token = "-".join(t_tokens_stemsnowball)
                #ret_tokens.append(t_token)
                ret_tokens.extend(t_tokens_stemsnowball)
            #if subtree.label() == 'V2V': print(subtree)
    #tokens_lower = [map(string.lower, sent) for sent in tokens]

    return(ret_tokens)


def indexing_pipeline(input_df, **kwargs):
    """Runs a full text indexing pipeline on a collection of texts contained in a DataFrame.
    Parameters
    ----------
    input_df (DataFrame): a DataFrame that contains a field called 'text'
    Returns
    -------
    df : the same DataFrames with a column called 'features' for each document
    wordlist : the list of words in the vocabulary with their corresponding IDF
    """
    inputCol_ = kwargs.get("inputCol", "reviews")
    vocabSize_ = kwargs.get("vocabSize", 5000)
    minDF_ = kwargs.get("minDF", 2.0)

    # ugly: to add that to our slave nodes so that it finds the bootstrapped nltk_data
    nltk.data.path.append('/home/hadoop/nltk_data')

    extract_bow_from_raw_text("")  # ugly: for instanciating all dependencies of this function
    tokenizer_udf = udf(extract_bow_from_raw_text, ArrayType(StringType()))
    df_tokens = input_df.withColumn("bow", tokenizer_udf(col(inputCol_)))

    cv = CountVectorizer(inputCol="bow", outputCol="vector_tf", vocabSize=vocabSize_, minDF=minDF_)
    cv_model = cv.fit(df_tokens)
    df_features_tf = cv_model.transform(df_tokens)

    idf = IDF(inputCol="vector_tf", outputCol="features")
    idfModel = idf.fit(df_features_tf)
    df_features = idfModel.transform(df_features_tf)

    return(df_features, cv_model.vocabulary)
