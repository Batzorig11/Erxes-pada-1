const fuzzBizz = () => {
  for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 != 0) {
      console.log("Fuzz");
    } else if (i % 5 == 0 && i % 3 != 0) {
      console.log("Bizz");
    } else if (i % 3 == 0 && i % 5 == 0) {
      console.log("FuzzBizz");
    } else console.log(i);
  }
};
fuzzBizz();
