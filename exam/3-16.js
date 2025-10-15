let array = [1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4];
let newArray = [];
let k = 0;
let flag = 0;

const removeDuplicates = () => {
  for (i = 0; i < array.length; i++) {
    for (j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        flag = 1;
      }
    }
    if (flag == 0) {
      newArray[k] = array[i];
      k++;
    }
    flag = 0;
  }
  console.log(newArray);
};

removeDuplicates();
