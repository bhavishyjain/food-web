let cartQuantity = 0;

document.addEventListener("DOMContentLoaded", function () {
  hideCartEmptyMessage();
});

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

  console.log("Added to cart:", long_name, price);

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
  const productName = document.createElement("h1");
  productName.className = "product-in-cart-name";
  productName.textContent = long_name;
  productItem.appendChild(productName);
  const productMeta = document.createElement("div");
  productMeta.className = "product-in-cart-meta";
  productItem.appendChild(productMeta);
  const quantityText = document.createElement("p");
  quantityText.className = "cart-quantity";
  quantityText.textContent = "1x";
  productMeta.appendChild(quantityText);
  const priceText = document.createElement("p");
  priceText.textContent = `@ $${parseFloat(price.replace("$", "")).toFixed(2)}`;
  productMeta.appendChild(priceText);
  const totalText = document.createElement("p");
  totalText.className = "cart-total";
  totalText.textContent = `$${parseFloat(price.replace("$", "")).toFixed(2)}`;
  productMeta.appendChild(totalText);
  const removeButton = document.createElement("button");
  removeButton.className = "product-cart-remove";
  const removeIcon = document.createElement("img");
  removeIcon.src = "./assets/images/icon-remove-item.svg";
  removeIcon.className = "close-but-svg";
  removeButton.appendChild(removeIcon);
  removeButton.onclick = function () {
    cartItemRemove(this);
  };
  productItem.appendChild(removeButton);
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

function updateOrderTotal() {
  const cartItems = document.querySelectorAll(".product-in-cart");
  let totalAmount = 0;

  cartItems.forEach((item) => {
    const quantity = parseInt(item.querySelector(".cart-quantity").textContent.replace("x", ""));
    const price = parseFloat(item.querySelector(".product-in-cart-meta p:nth-child(2)").textContent.replace("@ $", ""));
    totalAmount += quantity * price;
  });

  const totalAmountElement = document.querySelector(".aftercart .order-total p");
  if (totalAmountElement) {
    totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;
  } else {
    console.error('Total amount element not found.');
  }
}

function hideCartEmptyMessage() {
  const cartCake = document.querySelector(".cart-cake");
  const cartPara = document.querySelector(".cartpara");
  const afterCart = document.querySelector(".aftercart");
  const cartQuantityElement = document.getElementById("cart-quantity");
  const cartItems = document.querySelectorAll(".product-in-cart");
  const cartQuantity = parseInt(cartQuantityElement.textContent);

  if (cartQuantity > 0) {
    cartItems.forEach((item) => (item.style.display = "grid"));
    cartCake.style.display = "none";
    cartPara.style.display = "none";
    afterCart.style.display = "flex";
    updateOrderTotal();
  } else {
    cartItems.forEach((item) => (item.style.display = "none"));
    cartCake.style.display = "flex";
    cartPara.style.display = "flex";
    afterCart.style.display = "none";
  }
}

window.onload = function () {
  localStorage.setItem("name", "[]");
  localStorage.setItem("price", "[]");
};
