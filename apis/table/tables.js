import { table } from "table";
import chalk from "chalk";

const config = {
  columns: {
    1: {
      width: 70,
      truncate: 100,
      wrapWord: true
    }
  }
};

function fontColor(text) {
  return chalk.green(text);
}

const tables = {
  outputTable: function(data) {
    let output = table(data, config);
    console.log(output);
  },
  spotify: function(results) {
    let data = [
      [fontColor("Artist"), results.artists[0].name],
      [fontColor("Title"), results.name],
      [fontColor("Album"), results.album.name],
      [fontColor("Release Date"), results.album.release_date],
      [fontColor("Track Preview"), results.preview_url]
    ];
    this.outputTable(data);
  },
  omdb: function(results) {
    const item = JSON.parse(results);
    let data = [
      [fontColor("Title"), item.Title],
      [fontColor("Release Year"), item.Year],
      [fontColor("Actors"), item.Actors],
      [fontColor("IMBD Rating"), item.imdbRating],
      [fontColor("Country"), item.Country],
      [fontColor("Language"), item.Language],
      [fontColor("Plot"), item.Plot]
    ];
    this.outputTable(data);
  },
  omdbSeason: function(results) {
    const item = JSON.parse(results);
    let data = [
      [fontColor("Title"), item.Title],
      [fontColor("Season"), item.Season],
      [fontColor("TotalSeasons"), item.totalSeasons],
      [
        fontColor("Episodes"),
        item.Episodes
        // item.Episodes.forEach(item => console.log(item))
      ]
    ];
    this.outputTable(data);
  }
};

export default tables;
