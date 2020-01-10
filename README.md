# BAMazon
Creating a storefront where a User can buy items.

1/10/2020
Version 1

# Basic Use
BAMazon is a terminal based online store. A user begins by opening the terminal and using the following command:

### node bamazoncustomer.js

LIRI bot is a terminal based API searcher. A user can make searches by using the following commands:

### node liri.js movie-this "movie name"
Searches OMDB API for the movie, and responds with info about the title, year released, rating, language, plot, actors

### node liri.js spotify-this-song "song name"
Searches Spotify API for the song name, responds with artist name, an album name and a song preview link

### node liri.js concert-this "artist name"
Searches bands in town API for an artist, and displays upcoming concerts with venue location and dates

### node liri.js do-what-it-says
Reads a text file separate from the javascript file, and runs the spotify-this-song command for the song "I Want it That Way"
Text file can be updated to run movie-this for a movie name, or concert-this for an artist

# App Organization
### liri.js
1. npm packages required at the top
2. readText function utilizes built in npm fs package to read the random.txt file and the data in the file as arguments for node command do-what-it-says
3. getMovie function retrieves movie information from the OMDB API and displays info in the terminal
4. getMusic function retrieves song information from Spotify's API and displays info in the terminal
5. getConcert function retrieves concert information about an artist from the bands in town API and displays info in the terminal
6. switcher function uses switch case to pass in argument 2 and argument 3 from the provess.argv array, and runs one of the four commands

4. Include screenshots, gifs or videos of the app functioning

## Technologies used
1. Javascript
2. NodeJS packages
3. bands in town API
4. OMDB API
5. Spotify API

## Developers
1. Miguel Delos Santos


# Commands Working Using Gifs:

## concert-this
With name of venue, venue location, date of event using moment MM/DD/YYYY, with "ariana grande" as the search

![Alt Text](https://gyazo.com/8729ba02b5f6e83408b5a04b054b16b3.gif)

## spotify-this-song
With artist, song name, song preview link, album, searches for "thank u, next"

![Alt Text](https://gyazo.com/775e902cf902c5c9c5e22a37efbc8ca5.gif)

Default with no input in argument 3, searches for "The Sign" by Ace of Base

![Alt Text](https://gyazo.com/7a5a9dccbcd6b1521ab818992d66689f.gif)

## Readme break time! Random Kitty Gif:

![Alt Text](https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif)

## movie-this
With Title of movie, year, IMDB rating, rotten tomatoes rating, country produced, language, plot, actors, search is Spaceballs

![Alt Text](https://gyazo.com/5bb7b1886e7ae2b902ea4983746e0769.gif)

Default with no input in argument 3 shows info for Mr. Nobody

![Alt Text](https://gyazo.com/a269e273e00539dbde933a0f4327d001.gif)

## do-what-it-says
Runs spotify-this-song

![Alt Text](https://gyazo.com/8e90642bc4dec6d84a70ce65c7f15df1.gif)

Thanks for reading!

(//)<(0.0)>(//)

12/18/2019