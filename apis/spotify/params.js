const params = {
  artist: function(userInput) {
    return { type: "artist", query: userInput.search, limit: 5 };
  },
  album: function(userInput) {
    return { type: "album", query: userInput.search, limit: 5 };
  },
  track: function(userInput) {
    return { type: "track", query: userInput.search, limit: 5 };
  }
};

export default params;
