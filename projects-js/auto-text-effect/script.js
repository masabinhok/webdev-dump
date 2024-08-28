const containerEl = document.querySelector(".container");

const displayText = [
  "Sabin Shrestha",
  "a React Developer",
  "Computer Engineering Student",
  "AI/ML Enthusiast",
];

let idx = 0;
let subidx = 0;

updateText();
function updateText() {
  subidx++;
  containerEl.innerHTML = `
  <h1>Hi, I am ${displayText[idx].slice(0, subidx)}</h1>
  `;

  if (subidx === displayText[idx].length) {
    idx++;
    subidx = 0;
  }

  if (idx===displayText.length){
    idx=0;
  }

  setTimeout(updateText, 200);
}
