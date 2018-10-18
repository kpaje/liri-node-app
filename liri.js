require("dotenv").config();
var request = require("request");
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
      console.log("\nWelcome, Human. ");
    }
    if (inquirerResponse.command === 'spotify-this-song') {
      spotify.search({ type: 'track', query: inquirerResponse.search, limit: 1}, function(err, data) {
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
      request(queryUrl, function(error, response, body) {
        if (!error && response.statusCode === 200) {
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
      console.log("\nWelcome, Buddy. ");
    }
  });
