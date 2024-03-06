const x = document.getElementsByClassName("burger-menu-sidebar")[0];
const y = document.getElementsByClassName("cart-sidebar")[0];
// const z = document.getElementsByClassName("topcart")[0];
const a = document.getElementsByClassName("header-icon-image")[0];
const b = document.getElementsByClassName("header-icon-image")[1];
const w = document.getElementsByClassName("close-side-menu")[0];
const k = document.getElementById("announcement-bar");

function myFunction() {
  if (x.style.display === "flex") {  //conditions when burger menu is closed
    a.style.display = "block";
    b.style.display = "none";
    x.style.display = "none";
    w.style.display = "none";
    k.style.display = "none";
  } else {                            //conditions when burger menu is opened
    x.style.display = "flex";
    b.style.display = "block";
    a.style.display = "none";
    y.style.display = "none";
    w.style.display = "block";
    k.style.display = "none";
    // z.classList.remove("active");
  }
}

function cartclose() {
  y.style.display = "none";
  // z.classList.remove("active");
}
function cartopen() {
  y.style.display = "block";
  x.style.display = "none";
  // z.classList.add("active");
}


const productButtons = document.querySelectorAll(".add-to-cart");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const checkoutButton = document.querySelector(".checkout");
const noi = document.querySelector(".noi");

let cart = [];
let total = 0;

productButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const productName = document.querySelectorAll(".product-card span")[index].textContent;
    const productPrice = parseFloat(document.querySelectorAll(".product-card h4")[index].textContent);
    const product = {
      name: productName,
      price: productPrice,
    };
    cart.push(product);
    updateCart();
  });
});

function updateCart() {
  cartItems.innerHTML = "";
  total = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("mylist");
    li.textContent = `${item.name} - ₹${item.price.toFixed(2)}`;

    cartItems.appendChild(li);
    total += item.price;
  });
  noi.textContent = cart.length;
  cartTotal.textContent = total.toFixed(2);
}

checkoutButton.addEventListener("click", () => {
  alert(`Total: ₹${total.toFixed(2)} - Thank you for your purchase!`);
  cart = [];
  updateCart();
});

function clearcart() {
  cart = [];
  updateCart();
}