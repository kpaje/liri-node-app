import { table } from "table";
import chalk from "chalk";

function createTable(songinfo) {
  let data = [
    [chalk.green("Artist"), songinfo.artists[0].name],
    [chalk.green("Title"), songinfo.name],
    [chalk.green("Album"), songinfo.album.name],
    [chalk.green("Release Date"), songinfo.album.release_date],
    [chalk.green("Track Preview"), songinfo.preview_url]
  ];

  let config, output;
  config = {
    columns: {
      1: {
        width: 70,
        truncate: 100,
        wrapWord: true
      }
    }
  };

  output = table(data, config);
  console.log(output);
}

export default createTable;
