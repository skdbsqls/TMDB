import { fetchData, createMovieCards } from "./movie.js";
const button = document.querySelector("#search-btn");

function search() {
  fetchData().then((movies) => {
    const input = document.getElementById("search-input").value;
    const results = document.querySelector(".cardlist");

    const searchText = input.toLowerCase();

    if (searchText === "") {
      alert("검색어를 입력해주세요");
    }

    const matchingResults = movies.filter(function (movie) {
      return movie.title.toLowerCase().includes(searchText);
    });

    if (matchingResults.length === 0) {
      results.textContent = "검색 결과가 없습니다.";
    } else {
      const moviecards = document.querySelectorAll(".moviecard");
    }
    console.log(matchingResults);
  });
}
button.addEventListener("click", function (event) {
  event.preventDefault();
  search();
});
