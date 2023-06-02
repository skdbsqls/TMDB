import { fetchData, createMovieCards } from "./movie2.js";

const button = document.querySelector("#search-btn");

function search() {
  const input = document.getElementById("search-input").value;
  if (input === "") {
    alert("검색어를 입력해주세요");
    return;
  }

  const movieCards = document.querySelectorAll(".moviecard");
  movieCards.forEach((card) => {
    const title = card.querySelector("h3").textContent;
    if (title.toLowerCase().includes(input.toLowerCase())) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

button.addEventListener("click", function (event) {
  event.preventDefault();
  search();
});
