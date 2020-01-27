require("dotenv").config();
var inquirer = require("inquirer");
var bandsInTownSAearch = require("./bandsInTown");
var spotifySearch = require("./spotify");
var omdbSearch = require("./omdb");
var wildcard = require("./wildcard");

inquirer
  .prompt([
    {
      type: "list",
      message: "Please select a command",
      choices: ["concert-this", "spotify-this-song", "movie-this", "wildcard"],
      name: "command"
    },
    {
      type: "input",
      message: "What would you like to search?",
      name: "search"
    }
  ])
  .then(function(inquirerResponse) {
    if (inquirerResponse.command === "concert-this") {
      bandsInTownSAearch(inquirerResponse);
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
  });
