// creating class
class Anime {
  constructor() {
    //   getting the key for the api
    this.options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2a67987d7fmshb428b127111d4f1p1b0a9fjsnd2ba5976d2c8",
        "X-RapidAPI-Host": "jikan1.p.rapidapi.com",
      },
    };
    // creating a  variables
    this.input = document.querySelector("input");
    this.header = document.querySelector("header");
    this.animeDiv = document.querySelector(".search-results");
    this.score;
  }
  // function for api
  api() {
    fetch("https://jikan1.p.rapidapi.com/producer/1/1", this.options)
      .then((response) => response.json())
      .then((response) => {
        this.data = response.anime;
        // this.newData = this.data.map((myAnime) => {
        //   return myAnime;
        // });
        console.log(this.data);
        this.scoreFun(this.data);
      })
      .catch((err) => console.error(err));
  }

  //   function to display the header background
  displayBackground(arr) {
    this.animeDiv.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
      this.animeDiv.innerHTML += `<div class="box-anime text-center me-3 rounded-5 mt-5 mb-5 col-9 col-md-3 row  align-content-between">
      <img src="${arr[i].image_url}" alt="#" style="height:300px;" class="rounded-5">
      <p>${arr[i].title}</p>
      <button class="rounded-5 bg-warning text-black" style="height:50px"><a href="${arr[i].url}" class="text-decoration-none text-black">To more details</a></button>
     </div>`;
    }
  }

  //   function to filter a search
  filteredAnime(arr) {
    this.animeDiv.innerHTML = "";
    let searchInput = this.input.value.toLowerCase();
    this.newFilter = arr.filter(function (filterAnime) {
      return filterAnime.title.toLowerCase().startsWith(searchInput);
    });
    this.displayBackground(this.newFilter);
  }

  // function to filter the scores
  scoreFun(arr) {
    this.score = arr.filter((myScore) => {
      return myScore.score > 8;
    });
    console.log(this.score);
    this.displayBackground(this.score);
  }
}

// creating inheritance for Anime class
let anime = new Anime();
anime.api();

// event on the input
anime.input.addEventListener("keyup", function () {
  if (anime.input.value !== "") {
    anime.filteredAnime(anime.data);
  } else if (anime.input.value == "") {
    anime.displayBackground(anime.score);
  }
});

