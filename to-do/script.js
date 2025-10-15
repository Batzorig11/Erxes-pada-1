const output = document.getElementById("output");

const add = () => {
  const input = document.getElementById("input").value;
  const item = document.createElement("div");
  item.className = "item";
  item.innerHTML = `<input class="task" type="checkbox"><label>${input}</label><button class="remove" onclick="this.parentNode.remove()">X</button>`;
  output.appendChild(item);
  console.log("test");
  console.log(input);
};
