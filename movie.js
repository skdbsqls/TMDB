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

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then(function (response) {
    // 여러 개의 영화정보가 담긴 results[배열]를 movies라는 변수에 담기
    const movies = response.results;

    // movies[배열]를 돌면서 movie[배열요소](영화 한 개당 정보) 받아오기
    movies.map(function (movie) {
      // 영화정보를 담을 태그들 만들어주기 (div: 카드/img: 포스터/title: 제목/overview: 요약/average: 평점)
      const div = document.createElement("div");
      const img = document.createElement("img");
      const title = document.createElement("h3");
      const overview = document.createElement("p");
      const average = document.createElement("p");

      // div태그의 class 값 지정하기
      div.setAttribute("class", "moviecard");
      // div태그의 id 값을 영화정보의 id를 받아와서 넣어주기
      div.setAttribute("id", movie.id);
      // onclick
      div.setAttribute("onclick", "alertOn(this)");

      // img태그의 src(이미지소스 url) 속성값을 baseurl+영화정보의 poster_path를 받아와서 넣어주기
      img.setAttribute("src", baseurl + movie.poster_path);
      // title,overview,average 태그에 영화정보의 title,overview,average를 받아와서 넣어주기
      title.innerHTML = `${movie.title}`;
      overview.innerHTML = `${movie.overview}`;
      average.innerHTML = `${movie.vote_average}`;

      // img, title, overview, average 태그를 div태그 밑으로 넣어주기
      div.appendChild(img);
      div.appendChild(title);
      div.appendChild(overview);
      div.appendChild(average);
      // div태그를 section태그 밑으로 넣어주기
      $section.appendChild(div);
    });
  })
  .catch((err) => console.error(err));

function alertOn(moviecard) {
  const movieID = moviecard.getAttribute("id");
  alert(`영화 id : ${movieID}`);
}
