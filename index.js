const products = [
  {
    imgSrc: './assets/images/image-waffle-desktop.jpg',
    imgThub: './assets/images/image-waffle-thumbnail.jpg',
    shortName: 'Waffle',
    longName: 'Waffle with Berries',
    price: '$6.50',
  },
  {
    imgSrc: './assets/images/image-creme-brulee-desktop.jpg',
    imgThub: './assets/images/image-creme-brulee-thumbnail.jpg',
    shortName: 'Crème Brûlée',
    longName: 'Vanilla Bean Crème Brûlée',
    price: '$7.00',
  },
  {
    imgSrc: './assets/images/image-macaron-desktop.jpg',
    imgThub: './assets/images/image-macaron-thumbnail.jpg',
    shortName: 'Macaron',
    longName: 'Macaron Mix of Five',
    price: '$8.00',
  },
  {
    imgSrc: './assets/images/image-tiramisu-desktop.jpg',
    imgThub: './assets/images/image-tiramisu-thumbnail.jpg',
    shortName: 'Tiramisu',
    longName: 'Classic Tiramisu',
    price: '$5.50',
  },
  {
    imgSrc: './assets/images/image-baklava-desktop.jpg',
    imgThub: './assets/images/image-baklava-thumbnail.jpg',
    shortName: 'Baklava',
    longName: 'Pistachio Baklava',
    price: '$4.00',
  },
  {
    imgSrc: './assets/images/image-meringue-desktop.jpg',
    imgThub: './assets/images/image-meringue-thumbnail.jpg',
    shortName: 'Pie',
    longName: 'Lemon Meringue Pie',
    price: '$5.00',
  },
  {
    imgSrc: './assets/images/image-cake-desktop.jpg',
    imgThub: './assets/images/image-cake-thumbnail.jpg',
    shortName: 'Cake',
    longName: 'Red Velvet Cake',
    price: '$4.50',
  },
  {
    imgSrc: './assets/images/image-brownie-desktop.jpg',
    imgThub: './assets/images/image-brownie-thumbnail.jpg',
    shortName: 'Brownie',
    longName: 'Salted Caramel Brownie',
    price: '$4.50',
  },
  {
    imgSrc: './assets/images/image-panna-cotta-desktop.jpg',
    imgThub: './assets/images/image-panna-cotta-thumbnail.jpg',
    shortName: 'Panna Cotta',
    longName: 'Vanilla Panna Cotta',
    price: '$6.50',
  },
];

let cartQuantity = 0;

document.addEventListener("DOMContentLoaded", function () {
  hideCartEmptyMessage();
  setupPopup();
});

function hideCartEmptyMessage() {
  const cartCake = document.querySelector(".cart-cake");
  const cartPara = document.querySelector(".cartpara");
  const afterCart = document.querySelector(".aftercart");
  const cartQuantityElement = document.getElementById("cart-quantity");
  const cartItems = document.querySelectorAll(".product-in-cart");

  if (parseInt(cartQuantityElement.textContent) > 0) {
    cartItems.forEach((item) => (item.style.display = "grid"));
    cartCake.style.display = "none";
    cartPara.style.display = "none";
    afterCart.style.display = "flex";
  } else {
    cartItems.forEach((item) => (item.style.display = "none"));
    cartCake.style.display = "flex";
    cartPara.style.display = "flex";
    afterCart.style.display = "none";
  }
}

function updateOrderTotal() {
  const cartItems = document.querySelectorAll(".product-in-cart");
  let totalAmount = 0;

  cartItems.forEach((item) => {
    const quantity = parseInt(item.querySelector(".cart-quantity").textContent.replace("x", ""));
    const price = parseFloat(item.querySelector(".product-in-cart-meta p:nth-child(2)").textContent.replace("@ $", ""));
    totalAmount += quantity * price;
  });

  document.querySelector(".aftercart .order-total p").textContent = `$${totalAmount.toFixed(2)}`;
  document.querySelector(".confirm-order-total-price").textContent = `$${totalAmount.toFixed(2)}`;
}

function updateCartQuantity(productElement, quantity) {
  const long_name = productElement.querySelector(".long-name").innerText;
  const cartItem = document.querySelector(`.product-in-cart[data-product-name="${long_name}"]`);
  if (cartItem) {
    const quantityText = cartItem.querySelector(".cart-quantity");
    const priceText = cartItem.querySelector(".product-in-cart-meta p:nth-child(2)").textContent.replace("@ $", "");
    const totalText = cartItem.querySelector(".cart-total");
    quantityText.textContent = `${quantity}x`;
    totalText.textContent = `$${(parseFloat(priceText) * quantity).toFixed(2)}`;
  }
}

function cartclick(button) {
  const productElement = button.closest(".product");
  const additemElement = productElement.querySelector(".additem");
  const imgElement = productElement.querySelector(".product-img-desk");
  imgElement.style.border = "2px solid #C73B0F";
  additemElement.style.display = "flex";
  button.style.display = "none";
  cartQuantity++;
  document.getElementById("cart-quantity").textContent = cartQuantity;

  hideCartEmptyMessage();

  const long_name = productElement.querySelector(".long-name").innerText;
  const price = productElement.querySelector(".price").innerText;

  if (!localStorage.getItem("name")) {
    localStorage.setItem("name", "[]");
  }
  if (!localStorage.getItem("price")) {
    localStorage.setItem("price", "[]");
  }

  const oldData = JSON.parse(localStorage.getItem("name"));
  oldData.push(long_name);
  localStorage.setItem("name", JSON.stringify(oldData));

  const oldDataPrice = JSON.parse(localStorage.getItem("price"));
  oldDataPrice.push(price);
  localStorage.setItem("price", JSON.stringify(oldDataPrice));

  const productItem = document.createElement("div");
  productItem.className = "product-in-cart";
  productItem.dataset.productName = long_name;
  productItem.innerHTML = `
    <h1 class="product-in-cart-name">${long_name}</h1>
    <div class="product-in-cart-meta">
      <p class="cart-quantity">1x</p>
      <p>@ $${parseFloat(price.replace("$", "")).toFixed(2)}</p>
      <p class="cart-total">$${parseFloat(price.replace("$", "")).toFixed(2)}</p>
    </div>
    <button class="product-cart-remove">
      <img src="./assets/images/icon-remove-item.svg" class="close-but-svg" />
    </button>
  `;
  productItem.querySelector(".product-cart-remove").onclick = function () {
    cartItemRemove(this);
  };
  document.querySelector(".cart-products").appendChild(productItem);
  updateOrderTotal();
}

function decrement(button) {
  const productElement = button.closest(".product");
  const additemElement = productElement.querySelector(".additem");
  const addToCartButton = productElement.querySelector(".addtocart");
  const quantityElement = additemElement.querySelector(".quantity");
  const imgElement = productElement.querySelector(".product-img-desk");
  const price = productElement.querySelector(".price").innerText;
  let quantity = parseInt(quantityElement.textContent);
  if (quantity > 1) {
    quantity--;
    quantityElement.textContent = quantity;
    updateCartQuantity(productElement, quantity);
    cartQuantity--;
    document.getElementById("cart-quantity").textContent = cartQuantity;
  } else {
    additemElement.style.display = "none";
    addToCartButton.style.display = "flex";
    quantityElement.textContent = 1;
    imgElement.style.border = "none";
    cartQuantity--;
    document.getElementById("cart-quantity").textContent = cartQuantity;
    const long_name = productElement.querySelector(".long-name").innerText;
    const cartItems = document.querySelectorAll(".product-in-cart");
    cartItems.forEach((item) => {
      if (item.querySelector(".product-in-cart-name").innerText === long_name) {
        item.remove();
      }
    });
    const oldData = JSON.parse(localStorage.getItem("name"));
    const index = oldData.indexOf(long_name);
    if (index !== -1) {
      oldData.splice(index, 1);
      localStorage.setItem("name", JSON.stringify(oldData));
    }
    const oldDataPrice = JSON.parse(localStorage.getItem("price"));
    const indexPrice = oldDataPrice.indexOf(price);
    if (indexPrice !== -1) {
      oldDataPrice.splice(indexPrice, 1);
      localStorage.setItem("price", JSON.stringify(oldDataPrice));
    }
    if (cartQuantity === 0) {
      document.querySelector(".cart-cake").style.display = "flex";
      document.querySelector(".cartpara").style.display = "flex";
    }
  }
  hideCartEmptyMessage(); 
}

function increment(button) {
  const productElement = button.closest(".product");
  const quantityElement = button.closest(".additem").querySelector(".quantity");
  let quantity = parseInt(quantityElement.textContent);
  quantity++;
  quantityElement.textContent = quantity;
  updateCartQuantity(productElement, quantity);
  cartQuantity++;
  document.getElementById("cart-quantity").textContent = cartQuantity;
  hideCartEmptyMessage(); 
  updateOrderTotal(); 
}

function cartItemRemove(button) {
  const cartItem = button.closest(".product-in-cart");
  const productName = cartItem.querySelector(".product-in-cart-name").textContent.trim();
  const quantity = parseInt(cartItem.querySelector(".cart-quantity").textContent.replace("x", ""));
  cartItem.remove();
  cartQuantity -= quantity;
  document.getElementById("cart-quantity").textContent = cartQuantity;
  if (cartQuantity === 0) {
    document.querySelector(".cart-cake").style.display = "flex";
    document.querySelector(".cartpara").style.display = "flex";
  }
  hideCartEmptyMessage();
  const product = [...document.querySelectorAll(".product")].find(
    (product) =>
      product.querySelector(".long-name")?.textContent.trim() === productName
  );
  if (product) {
    product.querySelector(".product-img-desk").style.border = "none";
    product.querySelector(".additem").style.display = "none";
    product.querySelector(".addtocart").style.display = "flex";
    product.querySelector(".quantity").textContent = 1;
  }
  const updateLocalStorage = (key, value) => {
    const data = JSON.parse(localStorage.getItem(key)) || [];
    const index = data.indexOf(value);
    if (index !== -1) {
      data.splice(index, 1);
      localStorage.setItem(key, JSON.stringify(data));
    }
  };
  updateLocalStorage("name", productName);
  const price = cartItem.querySelector(".product-in-cart-meta p:nth-child(2)").textContent.replace("@ $", "");
  updateLocalStorage("price", price);
}

function updateOrderConfirmation() {
  const orderConfirmList = document.querySelector(".order-confirm-list-product");
  orderConfirmList.innerHTML = '';

  const cartItems = document.querySelectorAll(".product-in-cart");

  cartItems.forEach((item) => {
    const productName = item.querySelector(".product-in-cart-name").textContent.trim();
    const quantityText = item.querySelector(".cart-quantity").textContent.replace("x", "").trim();
    const quantity = parseInt(quantityText);
    const priceText = item.querySelector(".product-in-cart-meta p:nth-child(2)").textContent.replace("@ $", "");
    const price = parseFloat(priceText);
    const total = quantity * price;
    const product = products.find(p => p.longName === productName);
    const imgSrc = product ? product.imgThub : '';

    const productHTML = `
      <div class="order-confirm-list-product">
        <div class="img-name-flex">
          <img src="${imgSrc}"  alt="${productName}" />
          <div class="name-meta-flex">
            <p class="order-confirm-name">${productName}</p>
            <div class="quantity-price-flex">
              <p class="order-confirm-quantity">${quantity}x</p>
              <p class="order-confirm-price">@$${price.toFixed(2)}</p>
            </div>
          </div>
        </div>
        <p class="order-confirm-item-total">$${total.toFixed(2)}</p>
      </div>
    `;

    orderConfirmList.insertAdjacentHTML('beforeend', productHTML);
  });

  updateOrderTotal();
}

function resetCart() {
  const popup = document.getElementById("order-popup");
  popup.style.display = "none";
  localStorage.setItem("name", "[]");
  localStorage.setItem("price", "[]");
  cartQuantity = 0;
  document.getElementById("cart-quantity").textContent = cartQuantity;
  document.querySelectorAll(".product-in-cart").forEach(item => item.remove());
  document.querySelectorAll(".product").forEach(product => {
      product.querySelector(".product-img-desk").style.border = "none";
      product.querySelector(".additem").style.display = "none";
      product.querySelector(".addtocart").style.display = "flex";
      product.querySelector(".quantity").textContent = 1;
  });
  hideCartEmptyMessage();
}

function setupPopup() {
  const confirmOrderButton = document.querySelector(".confirm-order");
  const popup = document.getElementById("order-popup");
  const closeBtn = document.querySelector(".popup .close");

  confirmOrderButton.addEventListener("click", function () {
    updateOrderConfirmation();
    popup.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
}

window.onload = function () {
  localStorage.setItem("name", "[]");
  localStorage.setItem("price", "[]");

  const grid = document.querySelector('.grid');
  products.forEach((product) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
      <div class="img">
        <img class="product-img-desk" src="${product.imgSrc}">
        <div class="but-div">
          <button onclick="cartclick(this)" class="addtocart">
            <img style="margin-right:4px" src="./assets/images/icon-add-to-cart.svg" alt="addtocart" />
            Add to cart
          </button>
        </div>
        <div class="additem" style="display: none;">
          <button onclick="decrement(this)">
            <div class="decrement">
              <img src="./assets/images/icon-decrement-quantity.svg" alt="decrement" />
            </div>
          </button>
          <div class="quantity">1</div>
          <button onclick="increment(this)">
            <div class="increment">
              <img src="./assets/images/icon-increment-quantity.svg" alt="increment" />
            </div>
          </button>
        </div>
      </div>
      <div class="meta">
        <div class="short-name">${product.shortName}</div>
        <div class="long-name">${product.longName}</div>
        <div class="price">${product.price}</div>
      </div>
    `;
    grid.appendChild(productDiv);
  });
};
