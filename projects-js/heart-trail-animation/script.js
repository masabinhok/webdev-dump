const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const posX = event.offsetX;
  const posY = event.offsetY;
  const spanEl = document.createElement("span");
  const size = Math.random() * 50;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  spanEl.style.left = posX + "px";
  spanEl.style.top = posY + "px";
  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
