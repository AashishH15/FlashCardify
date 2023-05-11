# FlashCardify
FlashCardify is a Python-based project that creates flashcards for you by extracting keywords and their definitions from a given URL or text. It uses the TextRank algorithm to analyze the text and extract the most important keywords. It also scrapes Wiktionary to fetch the definitions of the extracted keywords. Finally, it saves the extracted keywords and their definitions in a CSV file.

Prerequisites
Before running FlashCardify, make sure you have installed the following packages:

numpy <br>
spacy <br>
newspaper <br>
csv <br>
wiktionaryparser <br>
bs4 <br>

You can install them using pip:

`pip install numpy spacy newspaper3k csv wiktionaryparser beautifulsoup4`

Also, make sure you have downloaded the "en_core_web_sm" model for spacy:

`python -m spacy download en_core_web_sm`

Usage
To use FlashCardify, simply import the TextRank4Keyword class from the FlashCardify module, create an instance of the class, and call its Get_URLandCSV() method with the URL of the web page you want to extract keywords from, and a filename for the CSV file.

You can also pass a text string to the analyze() method to extract keywords and their definitions from a text.
