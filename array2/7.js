let students = [
  { name: "Alice", age: 20, grades: [70, 80, 90] },
  { name: "Bob", age: 22, grades: [60, 65, 70] },
  { name: "Charlie", age: 23, grades: [80, 85, 90] },
  { name: "Dave", age: 21, grades: [50, 60, 55] },
];

let array = students
  .filter((student) => {
    let length = student.grades.length;
    let total = 0;
    for (i = 0; i < length; i++) {
      total += student.grades[i];
    }
    total;
    avg = Math.floor(total / length);

    return avg > 75;
  })
  .map((student) => student.name);

console.log(array);
