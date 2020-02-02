const Spotify = require("node-spotify-api");
import params from "./params";
import tables from "../../table/tables";
import fs from "fs";
import { checkForError } from "../../utils";

const spotify = {
  webAPI: function() {
    return new Spotify({
      id: process.env.SPOTIFY_ID,
      secret: process.env.SPOTIFY_SECRET
    });
  },
  wildCard: function() {
    fs.readFile("random.txt", "utf8", function(error, file) {
      const spotifyWebApi = spotify.webAPI();
      const parameters = params.track(file);
      console.log("I'm sorry human, IiIIiiiIIii waaaant it thiiisss waaaay!");
      checkForError(error);

      spotifyWebApi.search(parameters, function(error, file) {
        spotify.runQuery(error, file);
      });
    });
  },
  logResults: function(results) {
    tables.spotify(results);
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
    const spotifyWebApi = this.webAPI();
    const parameters = params.track(userInput.search);

    spotifyWebApi.search(parameters, function(error, data) {
      spotify.runQuery(error, data);
    });
  }
};

export default spotify;
