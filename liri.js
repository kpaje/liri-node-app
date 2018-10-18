require("dotenv").config();
var bandsintown = require('bandsintown')('codingbootcamp');
var request = require("request");
var fs = require("fs");
var moment = require("moment");
var inquirer = require("inquirer");
var Spotify = require('node-spotify-api');
var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});

inquirer
  .prompt([
    {
      type: "list",
      message: "Please select a command",
      choices: ["concert-this", "spotify-this-song", "movie-this", "do-what-it-says"],
      name: "command"
    },
    {
      type: "input",
      message: "What would you like to search?",
      name: "search"
    },
  ])
  .then(function(inquirerResponse) {
    if (inquirerResponse.command === 'concert-this') {
      bandsintown
        .getArtistEventList(inquirerResponse.search)
        .then(function(events) {
          var eventDate = events[0].datetime;
          console.log('Venue: ' + events[0].venue.name);
          console.log('Location: ' + events[0].formatted_location);
          console.log('Ticket Status: ' + events[0].ticket_status);
          console.log('Date: ' + moment(eventDate).format('MM/DD/YYYY'));
        });
    }
    if (inquirerResponse.command === 'spotify-this-song') {
      spotify
        .search({ type: 'track', query: inquirerResponse.search, limit: 1}, function(err, data) {
          if (err) {
            return console.log('Error occurred: ' + err);
          }
          var songinfo = data.tracks.items[0];
          console.log('Artist: ' + songinfo.artists[0].name);
          console.log('Title: ' + songinfo.name);
          console.log('Album: ' + songinfo.album.name);
          console.log('Track Preview: ' + songinfo.preview_url);
      });
    }
    if (inquirerResponse.command === 'movie-this') {
      var queryUrl = "http://www.omdbapi.com/?t=" + inquirerResponse.search + "&y=&plot=short&apikey=trilogy";
      request(queryUrl, function(err, response, body) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        if (!err && response.statusCode === 200) {
          console.log("Title: " + JSON.parse(body).Title);
          console.log("Release Year: " + JSON.parse(body).Year);
          console.log("IMBD Rating: " + JSON.parse(body).imdbRating);
          console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
          console.log("Country: " + JSON.parse(body).Country);
          console.log("Language: " + JSON.parse(body).Language);
          console.log("Plot: " + JSON.parse(body).Plot);
          console.log("Actors: " + JSON.parse(body).Actors);
        }
      });
    }
    if (inquirerResponse.command === 'do-what-it-says') {
      fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
          return console.log(error);
        }
        console.log("I'm sorry human, IiIIiiiIIii waaaant it thiiisss waaaay!");
        spotify
        .search({ type: 'track', query: data, limit: 1}, function(err, data) {
          if (err) {
            return console.log('Error occurred: ' + err);
          }
          var songinfo = data.tracks.items[0];
          console.log('Artist: ' + songinfo.artists[0].name);
          console.log('Title: ' + songinfo.name);
          console.log('Album: ' + songinfo.album.name);
          console.log('Track Preview: ' + songinfo.preview_url);
      });
      });
    }
  });
