let address = {
  street: "bayanzurkh",
  city: "ulaanbaatar",
  zipcode: 11000,
};

let student = {
  name: "Dorj",
  age: 18,
  address,
  getFullAddress: function () {
    return console.log(Object.entries(this.address));
  },
};

student.getFullAddress();
