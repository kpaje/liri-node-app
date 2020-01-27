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
	queryTVSeason: function(userInput) {
		return (
			"http://www.omdbapi.com/?t=" +
			userInput.search +
			"&Season=1&apikey=trilogy"
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
	logTVSeasonResults: function(body) {
		console.log("Title: " + JSON.parse(body).Title);
		console.log("Season: " + JSON.parse(body).Season);
		console.log("TotalSeasons: " + JSON.parse(body).totalSeasons);
		JSON.parse(body).Episodes.forEach(item => console.log(item));
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
			omdb.logTVSeasonResults(body);
		}
	},
	searchMovieTitle: function(userInput) {
		request(omdb.queryTVSeason(userInput), function(error, response, body) {
			checkForError(error);
			omdb.runQuery(error, response, body);
		});
	}
};

export default omdb;
