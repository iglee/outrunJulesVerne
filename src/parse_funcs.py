import requests
from bs4 import BeautifulSoup

def soupify(url):
    r = requests.get(url)
    soup = BeautifulSoup(r.content, 'html.parser')
    soup.prettify()
    return r, soup



def rev_address(r, soup):
    r_links = []
    for a in soup.find_all('a','review_count'):
        r_links.append(a['href'])
    return r_links



def format_url(r_links):
    base = 'http://www.tripadvisor.com{}'
    for i in range(len(r_links)):
        r_links[i] = base.format(r_links[i])
    return r_links



def list_reviews(r, soup):
    p_list = soup.find_all('p', 'partial_entry')
    return p_list



def pgs_reviews_url(link_old, page):
    ind = link_old.find('Reviews-')
    link_new = link_old[:ind+8]+page+link_old[ind+8:]
    return link_new



def pg_urltag(endpg):
    '''input endpg is the end page number
    this function returns all url tags for
    pages of url
    '''
    pgs = ['']

    for i in range(1,endpg):
        pgs.append('or{}0-'.format(i))
    return pgs



def last_pg(soup):
    end = soup.find('span', 'pageNum last taLnk ')
    if end == None:
        return 0
    return int(end.string)

def format_text(x):
    soup = BeautifulSoup(str(x), 'html.parser', from_encoding='utf-8')
