const url = "https://image.tmdb.org/t/p/w300";
const section = document.querySelector(".cardlist");
const button = document.querySelector("#search-btn");

const options2 = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjI2YzlkMTU3MTY4MTAwNjhlOWQ0MjlmNGJlMjNlZiIsInN1YiI6IjY0NzU5YTc2ZGQyNTg5MDEwMTdmNmQ5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EMnmPAw00QfpSChxdih4s5eEuG_ZXlWNZ77XbFJjjvo",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options2
)
  .then((response) => response.json())
  .then(function (response) {
    const movies = response.results;

    function search() {
      const input = document.getElementById("search-input");
      const results = document.querySelector(".cardlist");

      const searchText = input.value;

      results.innerHTML = "";

      if (searchText === "") {
        return;
      }

      const matchingResults = movies.filter(function (movie) {
        return movie.title.toLowerCase().includes(searchText.toLowerCase());
      });

      if (matchingResults.length === 0) {
        results.textContent = "검색 결과가 없습니다.";
      } else {
        matchingResults.forEach(function (movie) {
          const div = document.createElement("div");
          const img = document.createElement("img");
          const title = document.createElement("h3");
          const overview = document.createElement("p");
          const average = document.createElement("p");

          img.setAttribute("src", url + movie.poster_path);
          title.innerHTML = `${movie.title}`;
          overview.innerHTML = `${movie.overview}`;
          average.innerHTML = `${movie.vote_average}`;

          div.appendChild(img);
          div.appendChild(title);
          div.appendChild(overview);
          div.appendChild(average);
          section.appendChild(div);
        });
      }
    }
    button.addEventListener("click", function (event) {
      event.preventDefault();
      search();
    });
  })
  .catch(function (err) {
    console.error(err);
  });
