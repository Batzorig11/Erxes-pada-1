const main = async () => {
  const city = document.getElementById("city").value;
  const result = document.getElementById("result");
  const result1 = document.getElementById("result1");
  const result2 = document.getElementById("result2");
  const result3 = document.getElementById("result3");
  const result4 = document.getElementById("result4");

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ffc74c9e41d3cd99bf6bb25a7f582a7a`
  );
  const data = await response.json();
  console.log(data);
  result1.innerHTML = `Temperature : ${data.main.temp} &#176;C `;
  result2.innerHTML = `Weather : ${data.weather[0].main} `;
  result3.innerHTML = `Humidity : ${data.main.humidity}% `;
  result4.innerHTML = `Wind Speed : ${data.wind.speed}m/s`;
};

main();
