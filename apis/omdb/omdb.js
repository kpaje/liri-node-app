import request from "request";
import tables from "../table/tables";
import { queryMovieTitle } from "../../classes/OMDB";
import { checkForError } from "../../utils";

const omdb = {
  logTVSeasonResults: function(result) {
    tables.omdbSeason(result);
  },
  logResults: function(result) {
    tables.omdb(result);
  },
  runQuery: function(error, response, result) {
    if (!error && response.statusCode === 200) {
      omdb.logResults(result);
    }
  },
  searchTitle: function(userInput) {
    request(queryMovieTitle(userInput), function(error, response, body) {
      checkForError(error);
      omdb.runQuery(error, response, body);
    });
  }
};

export default omdb;
