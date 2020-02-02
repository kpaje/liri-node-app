import request from "request";
import tables from "../table/tables";
import OMDB from "../classes/OMDB";
import { checkForError } from "../utils";

const omdb = {
  logTVSeriesResults: function() {
    console.log(JSON.parse(body).Search[0]);
  },
  logTVSeasonResults: function(body) {
    tables.omdbSeason(body);
  },
  logTVEpisodeResults: function(body) {
    console.log(JSON.parse(body));
  },
  logMovieResults: function(body) {
    tables.omdbMovie(body);
  },
  runQuery: function(error, response, body) {
    if (!error && response.statusCode === 200) {
      omdb.logTVSeasonResults(body);
    }
  },
  searchTitle: function(userInput) {
    const tvSeason = new OMDB(null, userInput.search);
    request(tvSeason.queryTVSeason(), function(error, response, body) {
      checkForError(error);
      omdb.runQuery(error, response, body);
    });
  }
};

export default omdb;
