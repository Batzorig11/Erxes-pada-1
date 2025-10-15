// let salaa = [
//   { name: "Iveel", age: 22 },
//   { name: "Buyanbadrah", age: 19 },
//   { name: "Sod-bolor", age: 15 },
//   { name: "Minus", age: 20 },
// ];
// console.log(salaa.map((item) => item?.name));

// let arr = [8, 1, 1, 8, 8, 8, 3, 3, 3];
// let most = arr[0];
// let maxCount = 0;

// for (let i = 0; i < arr.length; i++) {
//   let count = 0;
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       count++;
//     }
//     if (count > maxCount) {
//       maxCount = count;
//       most = arr[i];
//     }
//   }
// }
// console.log("most :>> ", most);

// let a = 12111;
// let b = 123;
// let c = 4123;
// if (a > b) {
//   if (a > c) {
//     console.log(a);
//   } else {
//     console.log(c);
//   }
// } else {
//   if (b > c) {
//     console.log(b);
//   } else {
//     console.log(c);
//   }
// }

// const book = new Object();
// book.name = "harry potter";
// console.log(book);

// let subject = {
//   math: "1=1",
//   chem: "H20",
// };
// console.log(subject);

const nums = ["1", "3", "4", "6"];
console.log(nums);
nums.splice(1, 0, "2");
// Inserts at index 1
console.log(nums);
// Expected output: Array ["1", "2", "3", "4", "6"]

nums.splice(4, 1, "5");
// Replaces 1 element at index 4
console.log(nums);
// Expected output: Array ["1", "2", "3", "4", "5"]
