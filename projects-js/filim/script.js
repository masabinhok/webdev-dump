//dom elements

const sendButton = document.querySelector(".chat-send");
const userInput = document.querySelector("#chat-input");
const chatScreen = document.querySelector(".chat-screen");

//send-button interactive
sendButton.addEventListener("click", () => {
  userMessage();
});

let userChatHTML = "";
let filmChatHTML = "";
let chatScreenHTMl = "";
function userMessage() {
  userInputValue = userInput.value;
  console.log(userInputValue);
  userChatHTML = `<div class="user-message">${userInputValue}</div>`;
  chatScreenHTMl += userChatHTML;
  chatScreen.innerHTML = chatScreenHTMl;
  setTimeout(() => {
    filimMessage(userInput.value);
  }, 1000);
}

function filimMessage(userLastMessage) {
  userInput.value = "";
  if (userLastMessage === "hi" || userLastMessage === "Hi") {
    filmChatHTML = `<div class="filim-message">Hey, I'm Filim.</div>`;
  }
  chatScreenHTMl += filmChatHTML;
  chatScreen.innerHTML = chatScreenHTMl;
}
