let numbers = [3, 6, 2, 8, 4, 9];
let big = 0;
for (i = 0; i < numbers.length; i++) {
  for (j = 0; j < numbers.length; j++) {
    if (numbers[i] < numbers[j]) {
      big = numbers[j];
    }
  }
}
console.log("big = ", big);
