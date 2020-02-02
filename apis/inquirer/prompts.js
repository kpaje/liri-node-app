const prompts = [
  {
    type: "list",
    message: "Please select a command",
    choices: ["concert-this", "spotify-this-song", "movie-this", "wildcard"],
    name: "command"
  },
  {
    type: "input",
    message: "What title would you like to search?",
    name: "search"
  }
];

export default prompts;
