const Spotify = require("node-spotify-api");
import { table } from "table";
import chalk from "chalk";
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
    let config, data, output;

    data = [
      [chalk.green("Artist"), songinfo.artists[0].name],
      [chalk.green("Title"), songinfo.name],
      [chalk.green("Album"), songinfo.album.name],
      [chalk.green("Release Date"), songinfo.album.release_date],
      [chalk.green("Track Preview"), songinfo.preview_url]
    ];

    config = {
      columns: {
        1: {
          width: 70,
          truncate: 100,
          wrapWord: true
        }
      }
    };

    output = table(data, config);
    console.log(output);
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
    const parameters = spotify.trackParams(userInput);
    spotifyWebApi.search(parameters, function(error, data) {
      spotify.runQuery(error, data);
    });
  }
};

export default spotify;
