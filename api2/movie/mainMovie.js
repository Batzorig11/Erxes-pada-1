const baseUrl = "https://image.tmdb.org/t/p/w500";
const main = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=8476a7ab80ad76f0936744df0430e67c&language=en-US&page=1"
  );
  const data = await response.json();
  const img = baseUrl + `${data.results[0].poster_path}`;
  data.results.forEach((movie) => {
    const container = document.getElementById("container");
    const divSmall = document.createElement("div");
    divSmall.className = "small-div";

    divSmall.innerHTML = `
    <img class="image" src="${baseUrl + movie.poster_path}">
    <div class="movie-info">
    <h3 class="title">${movie.title}</h3>
    <p class="release_date">${movie.release_date.split("-")[0]}</p>
    <p class="vote_count">★ ${movie.vote_average.toFixed(1)}</p>
    <p class="overview">${movie.overview}</p></div>`;

    container.appendChild(divSmall);
  });
};
main();
