class OMDB {
  constructor(type, userInput) {
    this.type = type;
    this.userInput = userInput;
  }

  query() {
    return (
      "http://www.omdbapi.com/?t=" +
      `${this.userInput}` +
      "&type=" +
      `${this.type}` +
      "&apikey=trilogy"
    );
  }

  queryIMDBId() {
    return (
      "http://www.omdbapi.com/?i=" +
      `${this.userInput.search}` +
      "&y=&plot=full&apikey=trilogy"
    );
  }

  queryTVSeason() {
    return (
      "http://www.omdbapi.com/?t=" +
      `${this.userInput}` +
      "&Season=1&apikey=trilogy"
    );
  }
}

const queryMovieTitle = function(userInput) {
  const movieTitle = new OMDB("movie", userInput);
  return movieTitle.query();
};

const queryTVSeries = function(userInput) {
  const tvSeries = new OMDB("series", userInput);
  return tvSeries.query();
};

const queryTVEpisode = function(userInput) {
  const tvEpisode = new OMDB("episode", userInput);
  return tvEpisode.query();
};

export default OMDB;
