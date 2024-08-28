
// Select the previous and next buttons
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

// Initialize rotation value
let value = 0;

// Event listener for the "next" button
nextEl.addEventListener("click", () => {
  value += 45; // Increase rotation value by 45 degrees
  updateGallery(); // Update the gallery
});

// Event listener for the "previous" button
prevEl.addEventListener("click", () => {
  value -= 45; // Decrease rotation value by 45 degrees
  updateGallery(); // Update the gallery
});

// Automatically rotate the gallery every 3 seconds
setInterval(() => {
  value += 45; // Increase rotation value by 45 degrees
  updateGallery(); // Update the gallery
}, 3000);

// Function to update the gallery rotation
function updateGallery() {
  // Apply a 3D perspective and rotate the container around the Y-axis
  imageContainerEl.style.transform = "perspective(1000px) rotateY(" + value + "deg)";
}
