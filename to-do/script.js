const output = document.getElementById("output");

const add = () => {
  const input = document.getElementById("input").value;
  const item = document.createElement("li");
  item.className = "item";
  item.innerHTML = `<input type="checkbox" id="fruitApple" name="fruit" value="apple">
<label for="fruitApple">Apple</label>`;
  output.appendChild(item);
  console.log("test");
  console.log(input);
};
