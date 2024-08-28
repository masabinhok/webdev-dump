// DOM elements
const hamBar = document.querySelectorAll(".ham-bar");
const descriptionInput = document.querySelector(".js-description");
const qtyInput = document.querySelector(".js-quantity");
const priceInput = document.querySelector(".js-price");
const totalValue = document.querySelector(".js-total");
const nameInput = document.querySelector(".js-bill-title");
const dateInput = document.querySelector(".js-bill-date");

// Hamburger menu toggle
document.querySelector(".hamburger-menu").addEventListener("click", () => {
  hamBar.forEach((bar) => {
    bar.classList.toggle("js-ham-bar");
  });
});

// Load bill items from localStorage
const billItems = localStorage.getItem("bill")
  ? JSON.parse(localStorage.getItem("bill"))
  : [];
renderItem();

// Add item button event listener
document.querySelector(".js-add-items").addEventListener("click", () => {
  addItem();
});

function addItem() {
  const description = descriptionInput.value;
  const quantity = Number(qtyInput.value);
  const price = Number(priceInput.value);
  const name = nameInput.value;
  const date = dateInput.value;
  const total = quantity * price;

  if (description && quantity && price) {
    billItems.push({
      description,
      quantity,
      price,
      total,
    });

    localStorage.setItem("bill", JSON.stringify(billItems));
    renderItem();
  } else {
    alert("Please fill out all fields.");
  }
}

function renderItem() {
  let billHTML = ``;
  let grandTotal = 0;

  billItems.forEach((item, index) => {
    const { description, price, quantity, total } = item;
    grandTotal += total;

    const html = `
      <div class="bill-items-render">
        <div class="description">${description}
          <img class="minus-icon js-minus-icon" src="img/minus-icon.png" data-index="${index}">
        </div>
        <div class="quantity">${quantity}</div>
        <div class="price">${price.toFixed(2)}</div>
        <div class="total">${total.toFixed(2)}</div>
      </div>
    `;
    billHTML += html;
  });

  document.querySelector(".js-bill-items-input").innerHTML = billHTML;
  document.querySelector(
    ".js-grand-total"
  ).innerHTML = `Grand Total: ${grandTotal.toFixed(2)}`;

  // Reset input fields
  descriptionInput.value = ``;
  qtyInput.value = ``;
  priceInput.value = ``;
  totalValue.value = grandTotal.toFixed(2);



  // Generate bill button
const generateBill = document.querySelector(".js-generate-bill");
generateBill.addEventListener("click", () => {
  document.querySelector(
    ".js-generate-bill-div"
  ).innerHTML = `<div class="bill-sub-header1">
  <div class="bill-header-left">
    <img src="img/bill-payment.png" />
  </div>
  <div class="bill-header-right">
    <h1 class="bill-head">बिलify</h1>
    <p class="bill-slogan">बिलिङ अब सहज छ।</p>
  </div>
</div>
<div class="g-bill-info">
  <div class="g-bill-name">Sabin Shrestha</div>
  <div class="g-bill-date">06/06/2024</div>
</div>

<table class="bill-table">
  <thead>
    <tr class="g-bill-item-header">
      <th class="description">DESCRIPTION</th>
      <th class="quantity">QTY</th>
      <th class="price">PRICE</th>
      <th class="total">TOTAL</th>
    </tr>
  </thead>
</table>
<div class="g-bill-items-input js-bill-items-input">${billHTML}</div>
<div class="grand-total js-grand-total">Grand Total: ${grandTotal.toFixed(2)}</div>
<div class="print-bill js-print-bill">PRINT BILL</div>
</div>`;
});



  // Add event listeners to the minus icons
  document.querySelectorAll(".js-minus-icon").forEach((minusIcon) => {
    minusIcon.addEventListener("click", (event) => {
      const index = event.target.getAttribute("data-index");
      billItems.splice(index, 1);
      localStorage.setItem("bill", JSON.stringify(billItems));
      renderItem();
    });
  });
}

// Clear all button
const clearAll = document.querySelector(".js-clear-all");

clearAll.addEventListener("click", () => {
  localStorage.clear();
  billItems.length = 0;
  renderItem();
});




document.querySelector('.js-print-bill').addEventListener('click', ()=>{
  alert('No printer connected!');
})