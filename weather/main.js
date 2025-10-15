const main = async () => {
  const city = document.getElementById("input").value;
  const results = document.getElementById("results");
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ffc74c9e41d3cd99bf6bb25a7f582a7a`
  );
  const data = await response.json();
  console.log(data);
  results.innerHTML = `
  Temperature : ${data.main.temp} &#176;C
  Wind Speed : ${data.wind.speed}m/s`;
  console.log(city);
};

main();

document.addEventListener("keydown", function (event) {
  if (event.key == "Enter") main();
});
