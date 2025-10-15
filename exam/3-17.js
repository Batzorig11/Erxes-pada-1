let numbers = [7, 2, 3, 4, 5, 6];
let max = 0;

const findMax = () => {
  for (i = 0; i <= numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  console.log(max);
};
findMax();
