const Spotify = require("node-spotify-api");
import { checkForError } from "../utils";

const spotify = {
	webAPI: function() {
		return new Spotify({
			id: process.env.SPOTIFY_ID,
			secret: process.env.SPOTIFY_SECRET
		});
	},
	artistParams: function(userInput) {
		return { type: "artist", query: userInput.search, limit: 5 };
	},
	albumParams: function(userInput) {
		return { type: "album", query: userInput.search, limit: 5 };
	},
	trackParams: function(userInput) {
		return { type: "track", query: userInput.search, limit: 5 };
	},
	logResults: function(songinfo) {
		console.log("Artist: " + songinfo.artists[0].name),
			console.log("Title: " + songinfo.name),
			console.log("Album: " + songinfo.album.name),
			console.log("Release Date: " + songinfo.album.release_date),
			console.log("Track Preview: " + songinfo.preview_url);
	},
	runQuery: function(error, data) {
		var songinfo = data.tracks.items[0];
		checkForError(error);
		spotify.logResults(songinfo);
	},
	request: function() {
		//used to make API requests to any Spotify endpoint you supply
		//can be found via data.href
		this.webAPI()
			.request("https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx")
			.then(function(data) {
				console.log(data);
			});
	},
	search: function(userInput) {
		this.webAPI().search(spotify.trackParams(userInput), function(error, data) {
			spotify.runQuery(error, data);
		});
	}
};

export default spotify;
