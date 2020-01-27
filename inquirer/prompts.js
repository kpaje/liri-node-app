var prompts = [
  {
    type: "list",
    message: "Please select a command",
    choices: ["concert-this", "spotify-this-song", "movie-this", "wildcard"],
    name: "command"
  },
  {
    type: "input",
    message: "What would you like to search?",
    name: "search"
  }
];

module.exports = prompts;
