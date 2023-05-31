const section = document.querySelector(".cardlist");

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjI2YzlkMTU3MTY4MTAwNjhlOWQ0MjlmNGJlMjNlZiIsInN1YiI6IjY0NzU5YTc2ZGQyNTg5MDEwMTdmNmQ5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EMnmPAw00QfpSChxdih4s5eEuG_ZXlWNZ77XbFJjjvo",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then(function (response) {
    const movies = response.results;

    movies.map(function (moviecard) {
      const div = document.createElement("div");
      const img = document.createElement("img");
      const title = document.createElement("h3");
      const overview = document.createElement("p");
      const average = document.createElement("p");

      title.innerHTML = `${moviecard.title}`;
      overview.innerHTML = `${moviecard.overview}`;
      average.innerHTML = `${moviecard.vote_average}`;

      div.appendChild(title);
      div.appendChild(overview);
      div.appendChild(average);
      section.appendChild(div);
    });
  })
  .catch((err) => console.error(err));
