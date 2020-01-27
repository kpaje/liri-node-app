require("dotenv").config();
import bandsInTownSearch from "./bandsInTown";
import spotify from "./spotify";
import omdbSearch from "./omdb";
import wildcard from "./wildcard";

export default function apis(inquirerResponse) {
  if (inquirerResponse.command === "concert-this") {
    bandsInTownSearch(inquirerResponse);
  }
  if (inquirerResponse.command === "spotify-this-song") {
    spotify.searchArtist(inquirerResponse);
  }

  if (inquirerResponse.command === "movie-this") {
    omdbSearch(inquirerResponse);
  }
  if (inquirerResponse.command === "wildcard") {
    wildcard();
  }
}
