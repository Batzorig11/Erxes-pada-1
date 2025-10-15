let array = [1, 2, 3, 4, 5];
let sum = 0;
const sumOfArray = () => {
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);
};

sumOfArray();
