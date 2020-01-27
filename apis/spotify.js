require("dotenv").config();

export function spotify() {
  var Spotify = require("node-spotify-api");
  return new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
  });
}

export function spotifySearch(inquirerResponse) {
  spotify().search(
    { type: "track", query: inquirerResponse.search, limit: 1 },
    function(err, data) {
      if (err) {
        return console.log("Error occurred: " + err);
      }
      var songinfo = data.tracks.items[0];
      console.log("Artist: " + songinfo.artists[0].name);
      console.log("Title: " + songinfo.name);
      console.log("Album: " + songinfo.album.name);
      console.log("Track Preview: " + songinfo.preview_url);
    }
  );
}
