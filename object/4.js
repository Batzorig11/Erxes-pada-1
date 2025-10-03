let movie = {
  title: "whatever",
  director: "whoever",
  genre: "whichever",
  year: 2000,
};

function getKeysAndValues() {
  return console.log(Object.entries(movie));
}

getKeysAndValues();
