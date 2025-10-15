//-*-*-*-*-*-*-*- 3-15 -*-*-*-*-*-*-*-
// let word = "Hello";
// let count = 0;
// let countVowels = () => {
//   for (i = 0; i < word.length; i++) {
//     if (
//       word[i] == "a" ||
//       word[i] == "e" ||
//       word[i] == "i" ||
//       word[i] == "o" ||
//       word[i] == "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// };
// countVowels();

// -*-*-*-*-*-*-*- 3-16 -*-*-*-*-*-*-*-
// let array = [1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4];
// let newArray = [];
// let k = 0;
// let flag = 0;
// const removeDuplicates = () => {
//   for (i = 0; i < array.length; i++) {
//     for (j = i + 1; j < array.length; j++) {
//       if (array[i] == array[j]) {
//         flag = 1;
//       }
//     }
//     if (flag == 0) {
//       newArray[k] = array[i];
//       k++;
//     }
//     flag = 0;
//   }
//   console.log(newArray);
// };
// removeDuplicates();

// -*-*-*-*-*-*-*- 3-17 -*-*-*-*-*-*-*-
// let numbers = [7, 2, 3, 4, 5, 6];
// let max = 0;

// const findMax = () => {
//   for (i = 0; i <= numbers.length; i++) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }
//   console.log(max);
// };
// findMax();

// -*-*-*-*-*-*-*- 4-18 -*-*-*-*-*-*-*-
// let array = [1, 2, 3, 4, 5];
// let sum = 0;
// const sumOfArray = () => {
//   for (i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   console.log(sum);
// };
// sumOfArray();

// -*-*-*-*-*-*-*- 4-19 -*-*-*-*-*-*-*-
// const fuzzBizz = () => {
//   for (i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 != 0) {
//       console.log("Fuzz");
//     } else if (i % 5 == 0 && i % 3 != 0) {
//       console.log("Bizz");
//     } else if (i % 3 == 0 && i % 5 == 0) {
//       console.log("FuzzBizz");
//     } else console.log(i);
//   }
// };
// fuzzBizz();

// -*-*-*-*-*-*-*- 4-20 -*-*-*-*-*-*-*-
// let array1 = [1, 3, 5];
// let array2 = [2, 4, 6];
// let newArray = [];
// const mergeArrays = () => {
//   let length = array1.length;
//   for (i = 0; i < array1.length; i++) {
//     newArray[i] = array1[i];
//   }
//   let j = 0;
//   for (i = length; i < array2.length + length; i++) {
//     newArray[i] = array2[j];
//     j++;
//   }
//   newArray = newArray.sort();
//   console.log(newArray);
// };
// mergeArrays();
