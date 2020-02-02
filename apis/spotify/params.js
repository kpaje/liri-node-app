const params = {
  artist: function(userInput) {
    return { type: "artist", query: userInput, limit: 5 };
  },
  album: function(userInput) {
    return { type: "album", query: userInput, limit: 5 };
  },
  track: function(userInput) {
    return { type: "track", query: userInput, limit: 5 };
  },
  wildcard: function() {
    const params = "I Want it That Way";
    return { type: "track", query: params, limit: 5 };
  }
};

export default params;
