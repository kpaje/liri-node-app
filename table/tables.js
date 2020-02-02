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

const tables = {
  outputTable: function(data) {
    let output = table(data, config);
    console.log(output);
  },
  spotify: function(results) {
    let data = [
      [chalk.green("Artist"), results.artists[0].name],
      [chalk.green("Title"), results.name],
      [chalk.green("Album"), results.album.name],
      [chalk.green("Release Date"), results.album.release_date],
      [chalk.green("Track Preview"), results.preview_url]
    ];
    this.outputTable(data);
  },
  omdb: function(results) {
    let data = [
      [chalk.green("Title"), JSON.parse(results).Title],
      [chalk.green("Release Year"), JSON.parse(results).Year],
      [chalk.green("IMBD Rating"), JSON.parse(results).imdbRating],
      [chalk.green("Country"), JSON.parse(results).Country],
      [chalk.green("Language"), JSON.parse(results).Language],
      [chalk.green("Plot"), JSON.parse(results).Plot],
      [chalk.green("Actors"), JSON.parse(results).Actors]
    ];
    this.outputTable(data);
  }
};

export default tables;
