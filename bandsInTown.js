var bandsintown = require("bandsintown")("codingbootcamp");
var moment = require("moment");

function bandsInTownSAearch(inquirerResponse) {
  bandsintown
    .getArtistEventList(inquirerResponse.search)
    .then(function(events) {
      var eventDate = events[0].datetime;
      console.log("Venue: " + events[0].venue.name);
      console.log("Location: " + events[0].formatted_location);
      console.log("Ticket Status: " + events[0].ticket_status);
      console.log("Date: " + moment(eventDate).format("MM/DD/YYYY"));
    });
}

module.exports = bandsInTownSAearch;
