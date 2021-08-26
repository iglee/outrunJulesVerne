# a quick scraper to gather reviews by locales and associated attractions from tripadvisor

import requests
from bs4 import BeautifulSoup
from parse_funcs import soupify, rev_address, \
                        format_url, list_reviews, \
                        pgs_reviews_url, pg_urltag
import pandas as pd
import csv
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

range_i = 1500 # starting attraction
range_f = 2000 # ending attraction
#reviews_done = 1117

df = pd.read_csv('../data/attractions.csv')
url = df.url
last_pgs = df.last_page_number

reviews_total = []
for i in range(range_i, range_f):
    # first, we scrape for URLs associated with review pages 
    review_urls = [] 
    if last_pgs[i]<100:
        pgs = pg_urltag(last_pgs[i])
    else:
        pgs = pg_urltag(100)
    for x in pgs:
        review_urls.append(pgs_reviews_url(url[i], x))

    # then, given review page URLs scraped, we can extract out the reviews only by using BeautifulSoup to parse HTML
    reviews_for_attraction = []
    for x in review_urls:
        r, soup = soupify(x) # create HTML parse as BeautifulSoup object
        l = list_reviews(r, soup) # extract out list of review from the soup
        reviews_for_attraction+=l
    reviews_total.append(reviews_for_attraction)
    if i%10 ==0:
        print i

label_len = map(len,reviews_total)


# now we format data into a csv, connecting attractions and corresponding reviews
attr = df.attraction

attr = [[x] for x in attr]

attr = attr[range_i:range_f]
attr_label = []

for i in range(len(attr)):
    attr_label.append(attr[i]*label_len[i]) # create as many attraction label as there are length of reviews


attr_label_total = []
for x in attr_label:
    attr_label_total+=x

reviews = []
for i in range(len(reviews_total)):
    reviews += reviews_total[i]

reviews_so_far = zip(attr_label_total, reviews) # tie reviews and attraction labels for each of the reviews together

with open('../data/reviews_4.csv','wb') as out:
    csv_out=csv.writer(out)
    csv_out.writerow(['attractions','reviews'])
    for row in reviews_so_far:
        csv_out.writerow(row)
