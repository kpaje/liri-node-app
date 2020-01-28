import bandsInTown from "./bandsInTown";
import spotify from "./spotify";
import omdb from "./omdb";
import wildcard from "./wildcard";

function apis(userInput) {
	if (userInput.command === "concert-this") {
		bandsInTown.searchArtistEvents(userInput);
	}
	if (userInput.command === "spotify-this-song") {
		spotify.search(userInput);
	}

	if (userInput.command === "movie-this") {
		omdb.searchMovieTitle(userInput.search);
	}
	if (userInput.command === "wildcard") {
		wildcard.getTroll();
	}
}

export default apis;
