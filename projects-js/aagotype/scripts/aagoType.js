import { words } from "./data.js";

const wordCount = words.length;
let gameTime = 14 * 1000;
window.timer = null;
window.gameStart = null;

//timing-buttons
const fifteen = document.querySelector(".fifteen");
const thirty = document.querySelector(".thirty");
const fortyfive = document.querySelector(".fourty-five");
const sixty = document.querySelector(".sixty");

fifteen.addEventListener("click", () => {
  gameTime = 14 * 1000;
  hideTimerInput();
  newGame();
});

thirty.addEventListener("click", () => {
  gameTime = 29 * 1000;
  hideTimerInput();
  newGame();
});
fortyfive.addEventListener("click", () => {
  gameTime = 44 * 1000;
  hideTimerInput();
  newGame();
});
sixty.addEventListener("click", () => {
  gameTime = 59 * 1000;
  hideTimerInput();
  newGame();
});

//generate random word
function randomWord() {
  const randomIndex = Math.ceil(Math.random() * wordCount);
  return words[randomIndex - 1];
}

function addClass(el, name) {
  el.className += " " + name;
}

function removeClass(el, name) {
  el.className = el.className.replace(name, "");
}

//format word
function formatWord(word) {
  return `<div class="word">
  <span class="letter">${word
    .split("")
    .join(`</span><span class="letter">`)}</span></div>`;
}

//new game
function newGame() {
  document.querySelector("#words").innerHTML = "";
  for (let i = 0; i < 200; i++) {
    document.querySelector("#words").innerHTML += formatWord(randomWord());
  }
  document.querySelector(".word").classList.add("current");
  document.querySelector(".letter").classList.add("current");
  document.querySelector(".timer").innerHTML = gameTime / 1000 + 1 + " ";
  clearTimeout(window.timer);
  window.timer = null;
}

//
function getWpm() {
  const words = [...document.querySelectorAll(".word")];
  const lastTypedWord = document.querySelector(".word.current");
  const lastTypedWordIndex = words.indexOf(lastTypedWord);
  const typedWords = words.slice(0, lastTypedWordIndex);
  const correctWords = typedWords.filter((word) => {
    const letters = [...word.children];
    const incorrectLetters = letters.filter((letter) =>
      letter.className.includes("incorrect")
    );
    const correctLetters = letters.filter((letter) =>
      letter.className.includes("correct")
    );
    return (
      incorrectLetters.length === 0 && correctLetters.length === letters.length
    );
  });
  return Math.ceil((correctWords.length / gameTime) * 60000);
}

//hide timer-input
function hideTimerInput() {
  document.querySelector(".timer-input").classList.add("hidden");
}

//game over
function gameOver() {
  hideTimerInput();
  clearTimeout(window.timer);
  addClass(document.getElementById("game"), "over");
  addClass(document.querySelector(".message"), "nepali");
  const wpm = getWpm();
  document.querySelector(".wpm").innerHTML = `WPM ${wpm}`;
  if (wpm >= 0 && wpm < 10) {
    document.querySelector(".message").innerHTML = "एउटा झिल्का पनि छैन।";
  } else if (wpm >= 10 && wpm < 20) {
    document.querySelector(".message").innerHTML =
      "झिल्का छरिँदै छन्, अझै बल्नुछ!";
  } else if (wpm >= 20 && wpm < 30) {
    document.querySelector(".message").innerHTML = "यो त धुवाँ मात्रै हो!";
  } else if (wpm >= 30 && wpm < 40) {
    document.querySelector(".message").innerHTML = "अब तातिन थाल्यो।";
  } else if (wpm >= 40 && wpm < 50) {
    document.querySelector(".message").innerHTML = "आगो छ त!";
  } else if (wpm >= 50 && wpm < 60) {
    document.querySelector(".message").innerHTML =
      "आगो बल्दै छ, अझ राम्रो गरौं!";
  } else if (wpm >= 60 && wpm < 70) {
    document.querySelector(".message").innerHTML =
      "आगो त राम्रो बल्दैछ, गजबको काम!";
  } else if (wpm >= 70 && wpm < 80) {
    document.querySelector(".message").innerHTML =
      "लप्का उचाल्दैछन्, उत्कृष्ट!";
  } else if (wpm >= 80 && wpm < 90) {
    document.querySelector(".message").innerHTML =
      "आगोको राप गज्जबको छ, उत्कृष्ट!";
  } else if (wpm >= 90 && wpm < 100) {
    document.querySelector(".message").innerHTML =
      "तिमी त झिल्काहरुको जादुगर नै भयौ!";
  } else if (wpm >= 100) {
    document.querySelector(".message").innerHTML =
      "तिमी त आगोको मास्टर नै भयौ!";
  }

  document.querySelector(".wpm").classList.add("over");
}

//
document.getElementById("game").addEventListener("keyup", (ev) => {
  const key = ev.key;
  const currentWord = document.querySelector(".word.current");
  const currentLetter = document.querySelector(".letter.current");
  const expected = currentLetter?.innerHTML || " ";
  const isLetter = key.length === 1 && key !== " ";
  const isSpace = key === " ";
  const isBackspace = key === "Backspace";
  const isFirstLetter = currentWord.firstElementChild === currentLetter;

  if (document.querySelector("#game.over")) {
    return;
  }

  console.log({ key, expected });

  if (isSpace || isLetter) {
    document.querySelector("#cursor").classList.add("blink");
    hideTimerInput();
  }

  if ((!window.timer && isLetter) || isSpace) {
    window.timer = setInterval(() => {
      if (!window.gameStart) {
        window.gameStart = new Date().getTime();
      }
      const currentTime = new Date().getTime();
      const msPassed = gameStart - currentTime; //1000ms
      const sPassed = Math.round(msPassed / 1000); //1s
      const sLeft = gameTime / 1000 + sPassed; //14s
      if (sLeft <= 0) {
        document.querySelector(".timer").innerHTML = "समय सकियो!";
        gameOver();
        return;
      }

      document.querySelector(".timer").innerHTML = sLeft + " ";
    }, 1000);
  }

  if (isLetter) {
    if (currentLetter) {
      addClass(currentLetter, key === expected ? "correct" : "incorrect");
      removeClass(currentLetter, "current");

      if (currentLetter.nextElementSibling) {
        addClass(currentLetter.nextSibling, "current");
      }
    } else {
      const incorrectLetter = document.createElement("span");
      incorrectLetter.innerHTML = key;
      incorrectLetter.className = "letter incorrect extra";
      currentWord.appendChild(incorrectLetter);
    }
  }

  //space button

  if (isSpace) {
    if (expected !== " ") {
      const lettersToInvalidate = [
        ...document.querySelectorAll(".word.current .letter:not(.correct)"),
      ];
      lettersToInvalidate.forEach((letter) => {
        addClass(letter, "incorrect");
      });
    }
    removeClass(currentWord, "current");
    addClass(currentWord.nextElementSibling, "current");

    if (currentLetter) {
      removeClass(currentLetter, "current");
    }
    addClass(currentWord.nextSibling.firstElementChild, "current");
  }

  if (isBackspace) {
    if (currentLetter && isFirstLetter) {
      removeClass(currentWord, "current");
      addClass(currentWord.previousElementSibling, "current");
      removeClass(currentLetter, "current");
      addClass(currentWord.previousElementSibling.lastElementChild, "current");
      removeClass(
        currentWord.previousElementSibling.lastElementChild,
        "incorrect"
      );
      removeClass(
        currentWord.previousElementSibling.lastElementChild,
        "correct"
      );
    }
    if (currentLetter && !isFirstLetter) {
      removeClass(currentLetter, "current");
      addClass(currentLetter.previousElementSibling, "current");
      removeClass(currentLetter.previousElementSibling, "incorrect");
      removeClass(currentLetter.previousElementSibling, "correct");
    }

    if (!currentLetter) {
      addClass(currentWord.lastElementChild, "current");
      removeClass(currentWord.lastElementChild, "incorrect");
      removeClass(currentWord.lastElementChild, "correct");
    }
  }

  //move lines/words
  if (currentWord.getBoundingClientRect().top > 420) {
    const words = document.getElementById("words");
    const margin = parseInt(words.style.marginTop || "0px");
    words.style.marginTop = margin - 30 + "px";
  }

  // Move cursor to the position of the current letter or word
  const nextLetter = document.querySelector(".letter.current");
  const nextWord = document.querySelector(".word.current");
  const cursor = document.getElementById("cursor");

  if (nextLetter) {
    const letterRect = nextLetter.getBoundingClientRect();
    cursor.style.top = letterRect.top + 2 + "px";
    cursor.style.left = letterRect.left + "px";
  } else if (nextWord) {
    const wordRect = nextWord.getBoundingClientRect();
    cursor.style.top = wordRect.top + 2 + "px";
    cursor.style.left = wordRect.right + "px";
  }
});

//new-game-button eventlistener
document.querySelector(".new-game").addEventListener("click", () => {
  location.reload();
});

document.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") {
    location.reload();
  }
});

document.addEventListener("keydown", (ev) => {
  if (ev.key === " ") {
    ev.prevent.default();
  }
});

document.getElementById("game").addEventListener("keydown", (ev) => {
  if (ev.key === " ") {
    ev.preventDefault();
  }
});

//default loading
newGame();
