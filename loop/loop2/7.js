let numbers = [1, 2, 3, 4, 5, 6, 7];

let i = 0;
let j = 0;
let max = 0;

while (i < numbers.length) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  i++;
}
console.log(max);
