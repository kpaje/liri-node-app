import fs from "fs";
import spotify from "./spotify";
import { checkForError } from "../utils";

const wildcard = {
	params: function(data) {
		return { type: "track", query: data, limit: 1 };
	},
	logResults: function(songinfo) {
		console.log("Artist: " + songinfo.artists[0].name);
		console.log("Title: " + songinfo.name);
		console.log("Album: " + songinfo.album.name);
		console.log("Track Preview: " + songinfo.preview_url);
	},
	getTroll: function() {
		fs.readFile("random.txt", "utf8", function(error, data) {
			checkForError(error);
			console.log("I'm sorry human, IiIIiiiIIii waaaant it thiiisss waaaay!");
			spotify.webAPI().search(wildcard.params(data), function(error, data) {
				checkForError(error);
				var songinfo = data.tracks.items[0];
				wildcard.logResults(songinfo);
			});
		});
	}
};

export default wildcard;
