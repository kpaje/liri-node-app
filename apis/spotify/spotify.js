const Spotify = require("node-spotify-api");
import params from "./params";
import tables from "../../table/tables";
import { checkForError } from "../../utils";

const spotify = {
  webAPI: function() {
    return new Spotify({
      id: process.env.SPOTIFY_ID,
      secret: process.env.SPOTIFY_SECRET
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
    const parameters = params.track(userInput);
    spotifyWebApi.search(parameters, function(error, data) {
      spotify.runQuery(error, data);
    });
  }
};

export default spotify;
