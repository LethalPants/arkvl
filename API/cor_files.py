import pandas as pd
import csv
import os
import os.path
from whoosh import index
from whoosh.fields import Schema, NUMERIC, TEXT, KEYWORD, ID, STORED
from whoosh.analysis import StemmingAnalyzer


original_books = pd.read_csv('FinalBooksEdit.csv', encoding='latin')


#schema = Schema(book_id = NUMERIC(stored=True), title=TEXT(stored=True, phrase=True), author=TEXT(stored=True, phrase=True), image_url=TEXT(stored=True))

#if not os.path.exists("indexdir"):
#    os.mkdir("indexdir")
#ix = index.create_in("indexdir", schema)
ix = index.open_dir("indexdir")

#writer = ix.writer()
#bookIDs = original_books['book_id'].values
#titles = original_books['title'].values
#authors = original_books['authors'].values
#images = original_books['image_url'].values
#for i in range(9927):
#  if(pd.isnull(titles[i]) or pd.isnull(authors[i])):
#    continue
#  writer.add_document(book_id = int(bookIDs[i]), title = titles[i], author = authors[i], image_url = images[i])

#writer.commit()
