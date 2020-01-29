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
      const spotifyWebApi = spotify.webAPI();
      const parameters = wildcard.params(data);
      console.log("I'm sorry human, IiIIiiiIIii waaaant it thiiisss waaaay!");

      checkForError(error);
      spotifyWebApi.search(parameters, function(error, data) {
        spotify.runQuery(error, data);
      });
    });
  }
};

export default wildcard;
