let users = [
  { name: "Ariuka", email: "ariuka@gmail.com" },
  { name: "Tugsoo", email: "tugsoo@gmail.com" },
  { name: "Zoloo", email: "zoloo@yahoo.com" },
];
let news = users.filter((a) => a.name == "Ariuka");
console.log(news);
