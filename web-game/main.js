let a = 50;
let b = 50;
let i = 0;
let j = 0;
let gameOver = false;
document.getElementById("col1").style.width = `${a}%`;

document.getElementById("col2").style.width = `${b}%`;

document.addEventListener("keyup", function (e) {
  if (gameOver) return;

  if (e.key === "a") {
    console.log(a, b);
    if (a == 100) {
      document.getElementById("col1").innerHTML = "RED WON";
      gameOver = !gameOver;
      console.log("winner");
    } else {
      i++;
      document.getElementById("count1").innerText = i;
      a = a + 5;
      b = b - 5;
      document.getElementById("col1").style.width = `${a}%`;
      document.getElementById("col2").style.width = `${b}%`;
    }
  }
});

function column1() {
  if (gameOver) return;

  console.log(a, b);
  if (a == 100) {
    document.getElementById("col1").innerHTML = "RED WON";
    console.log("winner");
    gameOver = !gameOver;
  } else {
    i++;
    document.getElementById("count1").innerText = i;
    a = a + 5;
    b = b - 5;
    document.getElementById("col1").style.width = `${a}%`;
    document.getElementById("col2").style.width = `${b}%`;
  }
}

document.addEventListener("keyup", function (e) {
  if (gameOver) return;
  if (e.key === "l") {
    console.log(a, b);

    if (b == 100) {
      document.getElementById("col2").innerHTML = "BLUE WON";
      console.log("winner");
      gameOver = !gameOver;
    } else {
      j++;
      document.getElementById("count2").innerText = j;
      a = a - 5;
      b = b + 5;
      document.getElementById("col1").style.width = `${a}%`;
      document.getElementById("col2").style.width = `${b}%`;
    }
  }
});
function column2() {
  if (gameOver) return;
  if (b == 100) {
    document.getElementById("col2").innerHTML = "BLUE WON";
    console.log("winner");
    gameOver = !gameOver;
  } else {
    j++;
    document.getElementById("count2").innerText = j;
    a = a - 5;
    b = b + 5;
    document.getElementById("col1").style.width = `${a}%`;
    document.getElementById("col2").style.width = `${b}%`;
  }
}
const button = document.getElementById("button");

function refresh() {
  window.location.reload();
}

button.addEventListener("click", refresh);
