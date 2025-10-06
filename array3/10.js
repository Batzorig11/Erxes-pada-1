let items = [
  { name: "Pen", price: 20 },
  { name: "Notebook", price: 50 },
  { name: "Bag", price: 120 },
];

let less = items.filter((a) => a.price < 100);
console.log(less);
