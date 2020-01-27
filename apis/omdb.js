require("dotenv").config();
import request from "request";
import { checkForError } from "../utils";

const omdb = {
	queryUrl: function(inquirerResponse) {
		return (
			"http://www.omdbapi.com/?t=" +
			inquirerResponse.search +
			"&y=&plot=short&apikey=trilogy"
		);
	},
	logResults: function(body) {
		console.log("Title: " + JSON.parse(body).Title);
		console.log("Release Year: " + JSON.parse(body).Year);
		console.log("IMBD Rating: " + JSON.parse(body).imdbRating);
		console.log("Country: " + JSON.parse(body).Country);
		console.log("Language: " + JSON.parse(body).Language);
		console.log("Plot: " + JSON.parse(body).Plot);
		console.log("Actors: " + JSON.parse(body).Actors);
	},
	searchMovieTitle: function(inquirerResponse) {
		request(omdb.queryUrl(inquirerResponse), function(error, response, body) {
			checkForError(error);
			if (!error && response.statusCode === 200) {
				omdb.logResults(body);
			}
		});
	}
};

export default omdb;
