require("dotenv").config();
import bandsInTownSearch from "./bandsInTown";
import { spotifySearch } from "./spotify";
import omdbSearch from "./omdb";
import wildcard from "./wildcard";

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
