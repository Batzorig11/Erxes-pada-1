let array1 = [1, 3, 5];
let array2 = [2, 4, 6];
let newArray = [];
const mergeArrays = () => {
  let length = array1.length;
  for (i = 0; i < array1.length; i++) {
    newArray[i] = array1[i];
  }
  let j = 0;
  for (i = length; i < array2.length + length; i++) {
    newArray[i] = array2[j];
    j++;
  }
  newArray = newArray.sort();
  console.log(newArray);
};

mergeArrays();
