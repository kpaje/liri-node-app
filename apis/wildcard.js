import fs from "fs";
import spotify from "./spotify/spotify";
import params from "./spotify/params";
import { checkForError } from "../utils";

const wildcard = {
  getTroll: function() {
    fs.readFile("random.txt", "utf8", function(error, data) {
      const spotifyWebApi = spotify.webAPI();
      const parameters = params.track(data);
      console.log("I'm sorry human, IiIIiiiIIii waaaant it thiiisss waaaay!");
      checkForError(error);

      spotifyWebApi.search(parameters, function(error, data) {
        spotify.runQuery(error, data);
      });
    });
  }
};

export default wildcard;
