let math = "math";
let oop = "oop";
let chem = "chem";
let dl = "dl";
let ecm = "ecm";
let edc = "edc";

const subOrder = document.querySelector(".sub-order");
const shuffleButton = document.querySelector(".shuffle");

const subjects = [math, oop, chem, dl, ecm, edc];

function shuffleOrder() {
  let judge = true;
  while (judge) {
    //assign random number to each subject
    for (let i = 0; i < subjects.length; i++) {
      const random = Math.floor(Math.random() * 6 + 1);
      subjects[i] = random;
    }
    //check if all subjects have different random numbers
    if (
      subjects[0] !== subjects[1] &&
      subjects[0] !== subjects[2] &&
      subjects[0] !== subjects[3] &&
      subjects[0] !== subjects[4] &&
      subjects[0] !== subjects[5] &&
      subjects[1] !== subjects[2] &&
      subjects[1] !== subjects[3] &&
      subjects[1] !== subjects[4] &&
      subjects[1] !== subjects[5] &&
      subjects[2] !== subjects[3] &&
      subjects[2] !== subjects[4] &&
      subjects[2] !== subjects[5] &&
      subjects[3] !== subjects[4] &&
      subjects[3] !== subjects[5] &&
      subjects[4] !== subjects[5]
    ) {
      judge = false;
      break;
    } else {
      judge = true;
    }
  }
}

shuffleButton.addEventListener("click", () => {
  subOrder.innerHTML = "";
  shuffleOrder();
  let html = "";
  html = `
   <ul>
    <li> ${subjects[0]}</li>
    <li> ${subjects[1]}</li>
    <li> ${subjects[2]}</li>
    <li> ${subjects[3]}</li>
    <li> ${subjects[4]}</li>
    <li> ${subjects[5]}</li>
          </ul>`;
  subOrder.innerHTML = html;
});
