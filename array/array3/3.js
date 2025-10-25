let users = [
  { name: "Bat", age: 16 },
  { name: "Bold", age: 19 },
  { name: "Saraa", age: 22 },
];

let age = users.find((a) => a.age > 18);

console.log(age);
