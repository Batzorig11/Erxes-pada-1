let products = [
  { name: "Laptop", discount: false },
  { name: "Phone", discount: true },
  { name: "TV", discount: false },
];

let discount = products.some((a) => a.discount == true);
console.log(discount);
