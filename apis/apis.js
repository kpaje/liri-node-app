require("dotenv").config();
var bandsInTownSearch = require("./bandsInTown");
var spotifySearch = require("./spotify");
var omdbSearch = require("./omdb");
var wildcard = require("./wildcard");

function apis(inquirerResponse) {
  if (inquirerResponse.command === "concert-this") {
    bandsInTownSearch(inquirerResponse);
  }
  if (inquirerResponse.command === "spotify-this-song") {
    spotifySearch(inquirerResponse);
  }

  if (inquirerResponse.command === "movie-this") {
    omdbSearch(inquirerResponse);
  }
  if (inquirerResponse.command === "wildcard") {
    wildcard();
  }
}

module.exports = apis;
