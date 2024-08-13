let navlinks = document.querySelector(".navlinks");
let hambergur = document.querySelector("#menubtn");
let closebtn = document.querySelector("#closebtn");
let cartItemContainer = document.querySelector(".card-item-container");
let cartIcon = document.querySelector(".shopping-cart");

hambergur.addEventListener("click", () => {
  navlinks.classList.toggle("active");
  cartItemContainer.classList.remove("active");
  searchForm.classList.remove("active");
  hambergur.style.display = "none";
  closebtn.style.display = "inline-block";
  closebtn.style.color = "orange";
});
closebtn.addEventListener("click", () => {
  navlinks.classList.toggle("active");
  cartItemContainer.classList.remove("active");
  searchForm.classList.remove("active");
  hambergur.style.display = "inline-block";
  closebtn.style.display = "none";
  //   hambergur.style.color = "orange";
});

cartIcon.addEventListener("click", () => {
  cartItemContainer.classList.toggle("active");
  searchForm.classList.remove("active");
  navlinks.classList.remove("active");
});

let search = document.querySelector(".search");
let searchForm = document.querySelector(".search-form");

search.addEventListener("click", () => {
  searchForm.classList.toggle("active");
  navlinks.classList.remove("active");
  cartItemContainer.classList.remove("active");
});

window.onscroll = () => {
  navlinks.classList.remove("active");
  cartItemContainer.classList.remove("active");
  searchForm.classList.remove("active");
};

const addtoCart = (product, price) => {
  let newCartitem = document.createElement("div");
  newCartitem.classList.add("cart-item");
  newCartitem.innerHTML = ` <span class="fas fa-times"></span>
          <img src="" alt="alternate" />
          <div class="content">
            <h3>card ${product}</h3>
            <div class="pricing">${price}</div>
            </div>
    `;
  cartItemContainer.appendChild(newCartitem);
};

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    let product = button.parentElement.getAttribute("data-product");
    let price = button.parentElement.getAttribute("data-price");
    addtoCart(product, price);
  });
});
