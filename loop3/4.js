let array = [1, 2, 3, 4, 5, 6];
let odd = [];
let even = [];

for (i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    odd.push(array[i]);
  } else even.push(array[i]);
}
console.log(array, odd, even);
