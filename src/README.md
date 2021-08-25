# Source codes for backend modeling

## Requirements
- python 2.7
- spark and hadoop enabled AWS EMR cluster (see `../scripts` folder for setup instructions)
- NLTK 
- BeautifulSoup

## Contents of the `src`

1. **Data gathering**: `scraper.py` scrapes data from provided tripadvisor urls for attractions. The resulting data of 1M reviews are stored in a private AWS S3 bucket.
    - `parse_funcs.py`: collection of helper functions to process url automatically to help BeautifulSoup output reviews.
2. **Data processing pipeline**: `nltk_pipe.py` cleans up and tokenizes reviews.
3. **Modeling pipeline**: for unsupervised learning, I picked LDA. Since 1M+ reviews amounted to a huge amount of data, it was prudent to use spark LDA for quicker training and updating cycle. The modeling pipeline is organized in `lda_pipe.py`
4. **Generate recommendation**: Given LDA scores, `recommend.py` generates recommendations of attractions for each continent. And finally connect these attractions as a recommended path. Then, the output path is plotted using `plot_rec.py`
5. **Format output to be consumed by app:** This project was deployed as a webapp using flask, so the plot has to be saved as a figure and formatted for html using python's `string IO`. The script for this is `output.py`. 
    - The website was hosted on AWS, and *at the moment it is no longer active.* It may come back! with a new model too :]. LDA seems to have evolved, and also there are other unsupervised topic learning models to try.

The example use cases of these scripts are shown in the notebooks named `../Notebook * .ipynb`

## Webapp scripts
the webapp was deployed using bootstrap, and the source code for this is stored in `../static` and `../app.py`