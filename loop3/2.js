let word = "leveel";
let i = word.length - 1;
let empty = "";
for (; i >= 0; i--) {
  empty = empty + word[i];
}
console.log(empty);
if (word === empty) {
  console.log("palindrome");
} else console.log("not palindrome");
