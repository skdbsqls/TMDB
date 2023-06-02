const baseurl = "https://image.tmdb.org/t/p/w300";
const $section = document.querySelector(".cardlist");

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjI2YzlkMTU3MTY4MTAwNjhlOWQ0MjlmNGJlMjNlZiIsInN1YiI6IjY0NzU5YTc2ZGQyNTg5MDEwMTdmNmQ5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EMnmPAw00QfpSChxdih4s5eEuG_ZXlWNZ77XbFJjjvo",
  },
};

function fetchData() {
  return fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      return data.results;
    })
    .catch((err) => {
      console.error(err);
    });
}

function createMovieCards() {
  fetchData().then((movies) => {
    movies.forEach(function (movie) {
      const div = document.createElement("div");
      const img = document.createElement("img");
      const title = document.createElement("h3");
      const overview = document.createElement("p");
      const average = document.createElement("p");

      div.setAttribute("class", "moviecard");
      div.setAttribute("id", movie.id);

      img.setAttribute("src", baseurl + movie.poster_path);
      title.innerHTML = `${movie.title}`;
      overview.innerHTML = `${movie.overview}`;
      average.innerHTML = `${movie.vote_average}`;

      div.addEventListener("click", function () {
        alertOn(this);
      });

      div.appendChild(img);
      div.appendChild(title);
      div.appendChild(overview);
      div.appendChild(average);

      $section.appendChild(div);
    });
  });
}

function alertOn(moviecard) {
  const movieID = moviecard.getAttribute("id");
  alert(`영화 id : ${movieID}`);
}
createMovieCards();
export { fetchData, createMovieCards };
