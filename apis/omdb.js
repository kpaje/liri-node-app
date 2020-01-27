import request from "request";
import { checkForError } from "../utils";

const omdb = {
	queryMovieTitle: function(userInput) {
		return (
			"http://www.omdbapi.com/?t=" +
			userInput.search +
			"&y=&plot=full&apikey=trilogy"
		);
	},
	queryIMDBId: function(userInput) {
		return (
			"http://www.omdbapi.com/?i=" +
			userInput.search +
			"&y=&plot=full&apikey=trilogy"
		);
	},
	queryTVSeries: function(userInput) {
		return (
			"http://www.omdbapi.com/?s=" +
			userInput.search +
			"&type=series&apikey=trilogy"
		);
	},
	queryTVEpisode: function(userInput) {
		return (
			"http://www.omdbapi.com/?s=" +
			userInput.search +
			"&type=episode&apikey=trilogy"
		);
	},
	logTVSeriesResults: function() {
		console.log(JSON.parse(body).Search[0]);
	},
	logTVEpisodeResults: function(body) {
		console.log(JSON.parse(body));
	},
	logMovieResults: function(body) {
		console.log("Title: " + JSON.parse(body).Title);
		console.log("Release Year: " + JSON.parse(body).Year);
		console.log("IMBD Rating: " + JSON.parse(body).imdbRating);
		console.log("Country: " + JSON.parse(body).Country);
		console.log("Language: " + JSON.parse(body).Language);
		console.log("Plot: " + JSON.parse(body).Plot);
		console.log("Actors: " + JSON.parse(body).Actors);
	},
	runQuery: function(error, response, body) {
		if (!error && response.statusCode === 200) {
			omdb.logMovieResults(body);
		}
	},
	searchMovieTitle: function(userInput) {
		request(omdb.queryMovieTitle(userInput), function(error, response, body) {
			checkForError(error);
			omdb.runQuery(error, response, body);
		});
	}
};

export default omdb;
