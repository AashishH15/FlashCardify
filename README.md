# FlashCardify
FlashCardify is a Python-based project that creates flashcards for you by extracting keywords and their definitions from a given URL or text. It uses the TextRank algorithm to analyze the text and extract the most important keywords. It also scrapes Wiktionary to fetch the definitions of the extracted keywords. Finally, it saves the extracted keywords and their definitions in a CSV file.

Prerequisites
Before running FlashCardify, make sure you have installed the following packages:

numpy <br>
spacy
newspaper
csv
wiktionaryparser
bs4

You can install them using pip:

pip install numpy spacy newspaper3k csv wiktionaryparser beautifulsoup4

Also, make sure you have downloaded the "en_core_web_sm" model for spacy:

python -m spacy download en_core_web_sm

Usage
To use FlashCardify, simply import the TextRank4Keyword class from the FlashCardify module, create an instance of the class, and call its Get_URLandCSV() method with the URL of the web page you want to extract keywords from, and a filename for the CSV file.

from FlashCardify import TextRank4Keyword
url = 'https://en.wikipedia.org/wiki/Python_(programming_language)'
filename = 'flashcards.csv'
tr4w = TextRank4Keyword()
tr4w.Get_URLandCSV(url, filename)

You can also pass a text string to the analyze() method to extract keywords and their definitions from a text:

text = 'Python is an interpreted, high-level, general-purpose programming language.'
filename = 'flashcards.csv'

tr4w = TextRank4Keyword()
tr4w.analyze(text)
tr4w.get_keywords()
tr4w.get_definitions()
tr4w.save_to_csv(filename)
Credits
FlashCardify is inspired by this article on Analytics Vidhya. The TextRank algorithm used in FlashCardify is described in this paper by Rada Mihalcea and Paul Tarau. FlashCardify also uses the WiktionaryParser package to fetch the definitions of the extracted keywords from Wiktionary.
