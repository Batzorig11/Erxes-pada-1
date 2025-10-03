const person = {
  fristName: "Bat",
  lastName: "Dorj",
  age: 20,
};

console.log(person);

delete person.age;

console.log(person);

person.city = "Ulaanbaatar";
person.position = "Developer";
person.isMarried = "Married";

console.log(person);
