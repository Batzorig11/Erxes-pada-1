let students = [
  { name: "Ariunaa", score: 75 },
  { name: "Munkh", score: 82 },
  { name: "Bolor", score: 90 },
  { name: "Tugs", score: 68 },
];

let over18 = students.filter((a) => a.score > 80);

console.log(over18);
