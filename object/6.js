let user = {
  name: "Dorj",
  age: 18,
  greet: function () {
    return console.log("Hello", this.name);
  },
  updateName: function (newName) {
    this.name = newName;
  },
};

console.log(Object.entries(user));

user.updateName("Bat");
console.log(Object.entries(user));

console.log(user.greet());
