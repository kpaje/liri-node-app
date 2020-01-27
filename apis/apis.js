import bandsInTown from "./bandsInTown";
import spotify from "./spotify";
import omdb from "./omdb";
import wildcard from "./wildcard";

export default function apis(inquirerResponse) {
	if (inquirerResponse.command === "concert-this") {
		bandsInTown.searchArtistEvents(inquirerResponse);
	}
	if (inquirerResponse.command === "spotify-this-song") {
		spotify.searchArtist(inquirerResponse);
	}

	if (inquirerResponse.command === "movie-this") {
		omdb.searchMovieTitle(inquirerResponse);
	}
	if (inquirerResponse.command === "wildcard") {
		wildcard.getTroll();
	}
}
