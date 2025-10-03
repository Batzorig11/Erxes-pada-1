const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const output = document.getElementById("output");

let sum = 0;

button1.addEventListener("click", () => {
  if (Number(number1.value) % 2 == 0) {
    output.textContent = "tegsh too";
  } else output.textContent = "sondgoi too";
});

// button2.addEventListener("click", () => {
//   output.textContent = "Urjver = " + sum;
// });
