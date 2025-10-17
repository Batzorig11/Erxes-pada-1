const main = async () => {
  const results = document.getElementById("results");
  const city = document.getElementById("input").value;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ffc74c9e41d3cd99bf6bb25a7f582a7a`
  );

  const data = await response.json();

  results.innerHTML = `Temperature: ${data.main.temp} &#176;C<br>Wind Speed: ${data.wind.speed} m/s`;
};

document.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
    main();
  }
});
