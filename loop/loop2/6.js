let i = 1;
while (i <= 20) {
  if (i % 3 == 0 && i % 5 != 0) {
    console.log(i, "= fizz");
  } else if (i % 5 == 0 && i % 3 != 0) {
    console.log(i, "= fuzz");
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log(i, "= fizzfuzz");
  }
  i++;
}
