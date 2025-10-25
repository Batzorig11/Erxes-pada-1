let array1 = [1, 2, 2, 3, 4, 4, 5];
let array2 = [];

let i = 0;
let j = 0;
while (i < array1.length) {
  if (array1[i] == array1[i + 1]) {
  } else if (array1[i] != array1[i + 1]) {
    array2[j] = array1[i];
    j++;
  }
  i++;
}
console.log(array2);
