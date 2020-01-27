require("dotenv").config();
const Spotify = require("node-spotify-api");
import { checkForError } from "../utils";

const spotify = {
  webAPI: function() {
    return new Spotify({
      id: process.env.SPOTIFY_ID,
      secret: process.env.SPOTIFY_SECRET
    });
  },
  logResults: function(songinfo) {
    console.log("Artist: " + songinfo.artists[0].name),
      console.log("Title: " + songinfo.name),
      console.log("Album: " + songinfo.album.name),
      console.log("Release Date: " + songinfo.album.release_date),
      console.log("Track Preview: " + songinfo.preview_url);
  },
  searchArtist: function(inquirerResponse) {
    this.webAPI().search(
      { type: "track", query: inquirerResponse.search, limit: 1 },
      function(error, data) {
        var songinfo = data.tracks.items[0];
        checkForError(error);
        spotify.logResults(songinfo);
      }
    );
  }
};

export default spotify;
