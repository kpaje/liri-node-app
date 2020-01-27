require("dotenv").config();
import request from "request";

export default function omdbSearch(inquirerResponse) {
  var queryUrl =
    "http://www.omdbapi.com/?t=" +
    inquirerResponse.search +
    "&y=&plot=short&apikey=trilogy";

  request(queryUrl, function(err, response, body) {
    if (err) {
      return console.log("Error occurred: " + err);
    }
    if (!err && response.statusCode === 200) {
      console.log("Title: " + JSON.parse(body).Title);
      console.log("Release Year: " + JSON.parse(body).Year);
      console.log("IMBD Rating: " + JSON.parse(body).imdbRating);
      console.log("Country: " + JSON.parse(body).Country);
      console.log("Language: " + JSON.parse(body).Language);
      console.log("Plot: " + JSON.parse(body).Plot);
      console.log("Actors: " + JSON.parse(body).Actors);
    }
  });
}
