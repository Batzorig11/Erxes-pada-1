let book1 = {
  title: "Pet Semetary",
  author: "Stephen King",
  year: "2000",
};

let book2 = {
  author: "Stephen King",
  category: "horror",
  description: "Dead pet comes to life",
  year: 1977,
};

function mergeBooks() {
  return console.log(Object.assign(book1, book2));
}

mergeBooks();
