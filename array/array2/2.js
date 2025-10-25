let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
  {
    name: "Charlie",
    age: 28,
  },
];

let finder = people.find((i) => i.age > 30);
console.log(finder);
