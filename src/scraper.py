import requests
from bs4 import BeautifulSoup
from src.parse_funcs import soupify, rev_address, \
                        format_url, list_reviews, \
                        pgs_reviews_url, pg_urltag
import pandas as pd
import csv
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

reviews_done = 1117


reviews_total = []
for i in range(reviews_done, len(url)):

    review_urls = []
    if last_pgs[i]<100:
        pgs = pg_urltag(last_pgs[i])
    else:
        pgs = pg_urltag(100)
    for x in pgs:
        review_urls.append(pgs_reviews_url(url[i], x))

    reviews_for_attraction = []
    for x in review_urls:
        r, soup = soupify(x)
        l = list_reviews(r, soup)
        reviews_for_attraction+=l
    reviews_total.append(reviews_for_attraction)
    if i%10 ==0:
        print i

label_len = map(len,reviews_total)

attr = df.attraction

attr = [[x] for x in attr]

attr_label = []

for i in range(reviews_done, len(label_len)):
    attr_label.append(attr[i]*label_len[i])


attr_label_total = []
for x in attr_label:
    attr_label_total+=x

reviews = []
for i in range(len(reviews_total)):
    reviews += reviews_total[i]

reviews_so_far = zip(attr_label_total, reviews)

with open('data/reviews_2.csv','wb') as out:
    csv_out=csv.writer(out)
    csv_out.writerow(['attractions','reviews'])
    for row in reviews_so_far:
        csv_out.writerow(row)
