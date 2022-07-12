// creating class
class User {
  constructor() {
    this.mainContainer = document.querySelector(".main-container");
    this.responsiveBox = document.querySelector(".responsive-box");
    this.topLeft = document.querySelector(".cards");
    this.bottomContainer = document.querySelector(".bottom-container");
    this.btn = document.querySelector("button");
  }

  // function to get data from the api
  apiFun() {
    // fetch for the api
    fetch("https://animechan.vercel.app/api/quotes")
      .then((response) => response.json())
      .then((response) => {
        this.data = response;
        this.topLeftDiv(this.data);
      });
  }

 // function to display the cards on the left side
  topLeftDiv(arr){
    // iteration on the array we use
    for(let i = 0; i < 4; i++){
      this.topLeft.innerHTML += `<div class="card mt-5" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title"> ${arr[i].anime} treatment</h5>
        <p class="card-text"> ${arr[i].quote}.</p>
        <h6 class="card-text"> ${arr[i].character}.</h6>
      </div>
    </div>`
    }
  }
}

// inheritance for the class
const user = new User();
user.apiFun();

// event for the search button
user.btn.addEventListener("click", function () {
  window.location.href = "/main/index.html"
});

