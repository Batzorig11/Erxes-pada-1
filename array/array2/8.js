let products = [
  { name: "Laptop", category: "electronics", price: 999 },

  { name: "Headphones", category: "electronics", price: 49 },

  { name: "Keyboard", category: "electronics", price: 29 },

  { name: "Shoes", category: "clothing", price: 79 },

  { name: "T-shirt", category: "clothing", price: 19 },
];

let electronics = products
  .filter((item) => item.category == "electronics")
  .filter((item) => item.price > 100)
  .map((item) => item.name);

console.log(electronics);
