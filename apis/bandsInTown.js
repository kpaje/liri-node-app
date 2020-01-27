var bandsintown = require("bandsintown")("codingbootcamp");
import moment from "moment";

const bandsInTown = {
	logResults: function(events, eventDate) {
		console.log("Venue: " + events[0].venue.name);
		console.log("Location: " + events[0].formatted_location);
		console.log("Ticket Status: " + events[0].ticket_status);
		console.log("Date: " + moment(eventDate).format("MM/DD/YYYY"));
	},
	searchArtistEvents: function(inquirerResponse) {
		bandsintown
			.getArtistEventList(inquirerResponse.search)
			.then(function(events) {
				var eventDate = events[0].datetime;
				logResults(events, eventDate);
			});
	}
};

export default bandsInTown;
