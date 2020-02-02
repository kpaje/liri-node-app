class OMDB {
  constructor(type, userInput) {
    this.type = type;
    this.userInput = userInput;
  }

  query() {
    return (
      "http://www.omdbapi.com/?t=" +
      `${this.userInput}` +
      "&type=" +
      `${this.type}` +
      "&apikey=trilogy"
    );
  }
}

export default OMDB;
