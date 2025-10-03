let students = {
  1: { name: "Bolor", grade: 95 },
  2: { name: "Anu", grade: 87 },
  3: { name: "Temuujin", grade: 78 },
  4: { name: "Delger", grade: 83 },
  5: { name: "Zolzaya", grade: 99 },
};

let valueArray = Object.values(students);

let arrayLength = valueArray.length;
console.log(arrayLength);

function calculateAverage() {
  return (
    (students[1].grade +
      students[2].grade +
      students[3].grade +
      students[4].grade +
      students[5].grade) /
    5
  );
}
let avg = calculateAverage();

console.log("Average score : ", avg);

function findAboveAverage() {
  for (i = 1; i <= 5; i++) {
    if (students[i].grade > avg) {
      console.log("Above average : ", students[i].name);
    }
  }
}

findAboveAverage();

function findHighestScoreStudent() {
  let max = students[1].grade;
  let maxStudentName = "";
  for (i = 1; i <= 5; i++) {
    if (students[i].grade > max) {
      max = students[i].grade;
      maxStudentName = students[i].name;
    }
  }
  console.log("Higest scored student :", maxStudentName, max);
}

findHighestScoreStudent();

function findLowestScoreStudent() {
  let min = students[1].grade;
  let maxStudentName = "";
  for (i = 1; i <= 5; i++) {
    if (students[i].grade < min) {
      min = students[i].grade;
      maxStudentName = students[i].name;
    }
  }
  console.log("Lowest scored student :", maxStudentName, min);
}

findLowestScoreStudent();
