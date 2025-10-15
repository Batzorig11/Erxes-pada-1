const output = document.querySelector(".output");
let remember = "";
let output1 = 0;

function call(event) {
  if (event == "AC") {
    output.innerHTML = "";
  } else if (event == "1") {
    output.innerHTML += "1";
  } else if (event == "2") {
    output.innerHTML += "2";
  } else if (event == "3") {
    output.innerHTML += "3";
  } else if (event == "4") {
    output.innerHTML += "4";
  } else if (event == "5") {
    output.innerHTML += "5";
  } else if (event == "6") {
    output.innerHTML += "6";
  } else if (event == "7") {
    output.innerHTML += "7";
  } else if (event == "8") {
    output.innerHTML += "8";
  } else if (event == "9") {
    output.innerHTML += "9";
  } else if (event == "0") {
    output.innerHTML += "0";
  } else if (event == "+/-") {
    output.innerHTML = output.innerHTML * -1;
  } else if (event == "%") {
    output.innerHTML = output.innerHTML / 100;
  } else if (event == ".") {
    output.innerHTML = output.innerHTML + ".";
  } else if (event == "x") {
    output1 = output.innerHTML;
    remember = "x";
    output.innerHTML = "";
    console.log(output1);
  } else if (event == "/") {
    output1 = output.innerHTML;
    remember = "/";
    output.innerHTML = "";
  } else if (event == "+") {
    output1 = output.innerHTML;
    remember = "+";
    output.innerHTML = "";
  } else if (event == "-") {
    output1 = output.innerHTML;
    remember = "-";
    output.innerHTML = "";
  } else if (event == "=") {
    const output2 = output.innerHTML;
    if (remember == "x") {
      output.innerHTML = output1 * output2;
    } else if (remember == "/") {
      output.innerHTML = output1 / output2;
    } else if (remember == "+") {
      output.innerHTML = parseFloat(output1) + parseFloat(output2);
    } else if (remember == "-") {
      output.innerHTML = output1 - output2;
    }
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    call("=");
  } else if (event.key == "Escape") {
    call("AC");
  } else if (event.key == "+") {
    call("+");
  } else if (event.key == "-") {
    call("-");
  } else if (event.key == "*") {
    call("x");
  } else if (event.key == "/") {
    call("/");
  } else if (event.key == "%") {
    call("%");
  } else if (event.key == ".") {
    call(".");
  } else if (event.key == "0") {
    call("0");
  } else if (event.key == "1") {
    call("1");
  } else if (event.key == "2") {
    call("2");
  } else if (event.key == "3") {
    call("3");
  } else if (event.key == "4") {
    call("4");
  } else if (event.key == "5") {
    call("5");
  } else if (event.key == "6") {
    call("6");
  } else if (event.key == "7") {
    call("7");
  } else if (event.key == "8") {
    call("8");
  } else if (event.key == "9") {
    call("9");
  } else if (event.key == "Backspace") {
    output.innerHTML = output.innerHTML.slice(0, -1);
  } else if (event.key == "F9") {
    call("+/-");
  }
});
