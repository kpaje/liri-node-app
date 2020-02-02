import request from "request";
import tables from "../table/tables";
import OMDB from "../classes/OMDB";
import { checkForError } from "../utils";

const omdb = {
  queryMovieTitle: function(userInput) {
    const movie = new OMDB("movie", userInput);
    return movie.query();
  },
  queryIMDBId: function(userInput) {
    return (
      "http://www.omdbapi.com/?i=" +
      userInput.search +
      "&y=&plot=full&apikey=trilogy"
    );
  },
  queryTVSeries: function(userInput) {
    const tvSeries = new OMDB("series", userInput);
    return tvSeries.query();
  },
  queryTVSeason: function(userInput) {
    return (
      "http://www.omdbapi.com/?t=" +
      userInput.search +
      "&Season=1&apikey=trilogy"
    );
  },
  queryTVEpisode: function(userInput) {
    const tvEpisode = new OMDB("episode", userInput);
    return tvEpisode.query();
  },
  logTVSeriesResults: function() {
    console.log(JSON.parse(body).Search[0]);
  },
  logTVSeasonResults: function(body) {
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Season: " + JSON.parse(body).Season);
    console.log("TotalSeasons: " + JSON.parse(body).totalSeasons);
    JSON.parse(body).Episodes.forEach(item => console.log(item));
  },
  logTVEpisodeResults: function(body) {
    console.log(JSON.parse(body));
  },
  logMovieResults: function(body) {
    tables.omdb(body);
  },
  runQuery: function(error, response, body) {
    if (!error && response.statusCode === 200) {
      omdb.logMovieResults(body);
    }
  },
  searchTitle: function(userInput) {
    request(omdb.queryMovieTitle(userInput.search), function(
      error,
      response,
      body
    ) {
      checkForError(error);
      omdb.runQuery(error, response, body);
    });
  }
};

export default omdb;
