let num = 1548;
let sum = 0;
while (num > 0) {
  sum = (num % 10) + sum;
  num = Math.floor(num / 10);
}
console.log(sum);
