let people = [
  { name: "Alice", age: 25 },

  { name: "Bob", age: 35 },

  { name: "Charlie", age: 40 },

  { name: "Dave", age: 28 },
];

let array = people.filter((smt) => smt.age > 30).map((smt) => smt.name);
console.log(array);
