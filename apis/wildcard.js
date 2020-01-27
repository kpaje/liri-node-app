require("dotenv").config();
import fs from "fs";
import { spotify } from "./spotify";

export default function wildcard() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
    console.log("I'm sorry human, IiIIiiiIIii waaaant it thiiisss waaaay!");
    spotify().search({ type: "track", query: data, limit: 1 }, function(
      err,
      data
    ) {
      if (err) {
        return console.log("Error occurred: " + err);
      }
      var songinfo = data.tracks.items[0];
      console.log("Artist: " + songinfo.artists[0].name);
      console.log("Title: " + songinfo.name);
      console.log("Album: " + songinfo.album.name);
      console.log("Track Preview: " + songinfo.preview_url);
    });
  });
}
