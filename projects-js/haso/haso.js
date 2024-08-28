// Toggle Hamburger Menu
const hamBars = document.querySelectorAll(".ham-bar");
document.querySelector(".hamburger-menu").addEventListener("click", () => {
  hamBars.forEach((bar) => {
    bar.classList.toggle("js-ham-bar");
  });
});

// DOM Elements
const buttonInput = document.querySelector(".make-me-laugh");
const jokeBox = document.querySelector(".joke-box");

// Fetch and Display Joke
function getJoke() {
  const url = "https://official-joke-api.appspot.com/jokes/random";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      jokeBox.innerHTML = data.setup + " " + data.punchline;
    })
    .catch((error) => {
      console.error("Error fetching API:", error);
      jokeBox.innerHTML =
        "Sorry, we couldn't fetch a joke for you at the moment.";
    });
}

// Event Listener for Button
buttonInput.addEventListener("click", () => {
  getJoke();
  buttonInput.innerHTML = "अर्को पनि";
});


