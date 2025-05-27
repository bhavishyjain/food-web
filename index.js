const products = [
  {
    imgSrc:
      "https://images.unsplash.com/photo-1568051243851-f9b136146e97?q=80&w=400&h=300&auto=format&fit=crop",
    imgThumb:
      "https://images.unsplash.com/photo-1568051243851-f9b136146e97?q=80&w=80&h=80&auto=format&fit=crop",
    imgMob:
      "https://images.unsplash.com/photo-1568051243851-f9b136146e97?q=80&w=300&h=225&auto=format&fit=crop",
    imgTab:
      "https://images.unsplash.com/photo-1568051243851-f9b136146e97?q=80&w=350&h=262&auto=format&fit=crop",
    shortName: "Waffle",
    longName: "Waffle with Berries",
    price: 6.5,
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
    imgThumb:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=80&h=80&fit=crop",
    imgMob:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=225&fit=crop",
    imgTab:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=350&h=262&fit=crop",
    shortName: "Crème Brûlée",
    longName: "Vanilla Bean Crème Brûlée",
    price: 7.0,
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&h=300&fit=crop",
    imgThumb:
      "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=80&h=80&fit=crop",
    imgMob:
      "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=300&h=225&fit=crop",
    imgTab:
      "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=350&h=262&fit=crop",
    shortName: "Macaron",
    longName: "Macaron Mix of Five",
    price: 8.0,
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
    imgThumb:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=80&h=80&fit=crop",
    imgMob:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=225&fit=crop",
    imgTab:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=350&h=262&fit=crop",
    shortName: "Tiramisu",
    longName: "Classic Tiramisu",
    price: 5.5,
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&h=300&fit=crop",
    imgThumb:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=80&h=80&fit=crop",
    imgMob:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=300&h=225&fit=crop",
    imgTab:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=350&h=262&fit=crop",
    shortName: "Baklava",
    longName: "Pistachio Baklava",
    price: 4.0,
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
    imgThumb:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=80&h=80&fit=crop",
    imgMob:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=225&fit=crop",
    imgTab:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=350&h=262&fit=crop",
    shortName: "Pie",
    longName: "Lemon Meringue Pie",
    price: 5.0,
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    imgThumb:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=80&h=80&fit=crop",
    imgMob:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=225&fit=crop",
    imgTab:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=350&h=262&fit=crop",
    shortName: "Cake",
    longName: "Red Velvet Cake",
    price: 4.5,
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
    imgThumb:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=80&h=80&fit=crop",
    imgMob:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=225&fit=crop",
    imgTab:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=350&h=262&fit=crop",
    shortName: "Brownie",
    longName: "Salted Caramel Brownie",
    price: 4.5,
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
    imgThumb:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=80&h=80&fit=crop",
    imgMob:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=225&fit=crop",
    imgTab:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=350&h=262&fit=crop",
    shortName: "Panna Cotta",
    longName: "Vanilla Panna Cotta",
    price: 6.5,
  },
];

// Cart state
let cart = {};
let cartQuantity = 0;

// DOM elements
const loadingScreen = document.getElementById("loading-screen");
const productsGrid = document.getElementById("products-grid");
const totalProducts = document.getElementById("total-products");
const cartPreview = document.getElementById("cart-preview");
const cartCount = document.getElementById("cart-count");
const cartValue = document.getElementById("cart-value");
const cartEmpty = document.getElementById("cart-empty");
const cartContent = document.getElementById("cart-content");
const cartItems = document.getElementById("cart-items");
const cartSubtotal = document.getElementById("cart-subtotal");
const cartTotal = document.getElementById("cart-total");
const confirmBtn = document.getElementById("confirm-btn");
const orderModal = document.getElementById("order-modal");
const orderItems = document.getElementById("order-items");
const modalTotal = document.getElementById("modal-total");
const newOrderBtn = document.getElementById("new-order-btn");
const toastContainer = document.getElementById("toast-container");

// Initialize the app
document.addEventListener("DOMContentLoaded", function () {
  showLoading();
  setTimeout(() => {
    hideLoading();
    renderProducts();
    updateCartDisplay();
    updateHeaderStats();
    setupEventListeners();
    setupCartScrolling();
  }, 100);
});

// Setup cart scrolling functionality
function setupCartScrolling() {
  // Handle window resize to recalculate cart dimensions
  window.addEventListener("resize", function () {
    if (cartQuantity > 0) {
      updateCartDisplay();
    }
  });

  // Add scroll indicator for cart items
  const cartItemsWrapper = document.querySelector(".cart-items-wrapper");
  if (cartItemsWrapper) {
    cartItemsWrapper.addEventListener("scroll", function () {
      const scrollIndicator = document.querySelector(".cart-scroll-indicator");
      if (scrollIndicator) {
        const isScrolledToBottom =
          this.scrollTop + this.offsetHeight >= this.scrollHeight - 10;
        scrollIndicator.style.opacity = isScrolledToBottom ? "0" : "1";
      }
    });
  }
}

// Loading screen functions
function showLoading() {
  loadingScreen.style.display = "flex";
}

function hideLoading() {
  loadingScreen.classList.add("fade-out");
  setTimeout(() => {
    loadingScreen.style.display = "none";
  }, 500);
}

// Update header stats
function updateHeaderStats() {
  totalProducts.textContent = products.length;
  cartPreview.textContent = cartQuantity;
}

// Render products grid
function renderProducts() {
  productsGrid.innerHTML = "";

  products.forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.dataset.productId = index;

    productCard.innerHTML = `
      <div class="product-image-container">
        <picture>
          <source srcset="${product.imgSrc}" media="(min-width: 1024px)">
          <source srcset="${product.imgTab}" media="(min-width: 768px)">
          <img class="product-image" src="${product.imgMob}" alt="${
      product.longName
    }">
        </picture>
        <div class="product-overlay"></div>
        
        <button class="add-to-cart-btn" data-product-id="${index}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="m1 1 4 4 2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          Add to Cart
        </button>
        
        <div class="quantity-controls" data-product-id="${index}">
          <button class="quantity-btn decrement-btn" data-product-id="${index}">-</button>
          <span class="quantity-display">1</span>
          <button class="quantity-btn increment-btn" data-product-id="${index}">+</button>
        </div>
      </div>
      
      <div class="product-info">
        <div class="product-category">${product.shortName}</div>
        <div class="product-name">${product.longName}</div>
        <div class="product-price">$${product.price.toFixed(2)}</div>
      </div>
    `;

    productsGrid.appendChild(productCard);
  });
}

// Setup event listeners
function setupEventListeners() {
  // Add to cart buttons and quantity controls
  document.addEventListener("click", function (e) {
    if (e.target.closest(".add-to-cart-btn")) {
      const productId = parseInt(
        e.target.closest(".add-to-cart-btn").dataset.productId
      );
      addToCart(productId);
    }

    if (e.target.closest(".increment-btn")) {
      const productId = parseInt(
        e.target.closest(".increment-btn").dataset.productId
      );
      incrementQuantity(productId);
    }

    if (e.target.closest(".decrement-btn")) {
      const productId = parseInt(
        e.target.closest(".decrement-btn").dataset.productId
      );
      decrementQuantity(productId);
    }

    if (e.target.closest(".remove-btn")) {
      const productId = parseInt(
        e.target.closest(".remove-btn").dataset.productId
      );
      removeFromCart(productId);
    }
  });

  // Confirm order button with ripple effect
  confirmBtn.addEventListener("click", function (e) {
    createRippleEffect(e, confirmBtn);
    setTimeout(() => {
      showOrderModal();
    }, 300);
  });

  // New order button
  newOrderBtn.addEventListener("click", startNewOrder);

  // Close modal when clicking outside
  orderModal.addEventListener("click", function (e) {
    if (e.target === orderModal) {
      closeOrderModal();
    }
  });
}

// Create ripple effect for buttons
function createRippleEffect(event, button) {
  const ripple = button.querySelector(".btn-ripple");
  if (ripple) {
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.classList.add("active");

    setTimeout(() => {
      ripple.classList.remove("active");
    }, 600);
  }
}

// Show toast notification
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-content">
      <div class="toast-icon">
        ${type === "success" ? "✓" : type === "error" ? "✗" : "ℹ"}
      </div>
      <div class="toast-message">${message}</div>
    </div>
  `;

  toastContainer.appendChild(toast);

  // Trigger animation
  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  // Remove toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3000);
}

// Add product to cart
function addToCart(productId) {
  const product = products[productId];

  if (!cart[productId]) {
    cart[productId] = {
      product: product,
      quantity: 0,
    };
  }

  cart[productId].quantity = 1;
  cartQuantity++;

  updateProductDisplay(productId);
  updateCartDisplay();
  updateHeaderStats();
  showToast(`${product.longName} added to cart!`);
}

// Increment quantity
function incrementQuantity(productId) {
  if (cart[productId]) {
    cart[productId].quantity++;
    cartQuantity++;
    updateProductDisplay(productId);
    updateCartDisplay();
    updateHeaderStats();
  }
}

// Decrement quantity
function decrementQuantity(productId) {
  if (cart[productId] && cart[productId].quantity > 1) {
    cart[productId].quantity--;
    cartQuantity--;
    updateProductDisplay(productId);
    updateCartDisplay();
    updateHeaderStats();
  } else if (cart[productId] && cart[productId].quantity === 1) {
    removeFromCart(productId);
  }
}

// Remove from cart
function removeFromCart(productId) {
  if (cart[productId]) {
    const product = cart[productId].product;
    cartQuantity -= cart[productId].quantity;
    delete cart[productId];
    updateProductDisplay(productId);
    updateCartDisplay();
    updateHeaderStats();
    showToast(`${product.longName} removed from cart`, "info");
  }
}

// Update product display (show/hide quantity controls)
function updateProductDisplay(productId) {
  const productCard = document.querySelector(
    `[data-product-id="${productId}"]`
  );
  const addBtn = productCard.querySelector(".add-to-cart-btn");
  const quantityControls = productCard.querySelector(".quantity-controls");
  const quantityDisplay = quantityControls.querySelector(".quantity-display");

  if (cart[productId] && cart[productId].quantity > 0) {
    addBtn.style.display = "none";
    quantityControls.classList.add("active");
    quantityDisplay.textContent = cart[productId].quantity;
  } else {
    addBtn.style.display = "flex";
    quantityControls.classList.remove("active");
    quantityDisplay.textContent = "1";
  }
}

// Update cart display
function updateCartDisplay() {
  cartCount.textContent = cartQuantity;

  // Calculate total value
  let totalValue = 0;
  Object.keys(cart).forEach((productId) => {
    const item = cart[productId];
    totalValue += item.product.price * item.quantity;
  });

  cartValue.textContent = `${totalValue.toFixed(2)}`;

  if (cartQuantity === 0) {
    cartEmpty.style.display = "block";
    cartContent.style.display = "none";
  } else {
    cartEmpty.style.display = "none";
    cartContent.style.display = "block";
    renderCartItems();

    // Ensure cart items wrapper has proper height for scrolling
    const cartItemsWrapper = document.querySelector(".cart-items-wrapper");
    const cartSummary = document.querySelector(".cart-summary");

    if (cartItemsWrapper && cartSummary) {
      // Calculate available space for items
      const cartContainer = document.querySelector(".cart-container");
      const cartHeader = document.querySelector(".cart-header");

      if (cartContainer && cartHeader) {
        const containerHeight = cartContainer.offsetHeight;
        const headerHeight = cartHeader.offsetHeight;
        const summaryHeight = cartSummary.offsetHeight;
        const availableHeight =
          containerHeight - headerHeight - summaryHeight - 40; // 40px for padding

        cartItemsWrapper.style.maxHeight = `${Math.max(
          200,
          availableHeight
        )}px`;
        cartItemsWrapper.style.overflowY = "auto";
      }
    }
  }
}

// Render cart items
function renderCartItems() {
  cartItems.innerHTML = "";
  let subtotal = 0;

  Object.keys(cart).forEach((productId) => {
    const item = cart[productId];
    const itemTotal = item.product.price * item.quantity;
    subtotal += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <img src="${item.product.imgThumb}" alt="${
      item.product.longName
    }" class="cart-item-image">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.product.longName}</div>
        <div class="cart-item-details">
          <span class="cart-item-quantity">${item.quantity}x</span>
          <span class="cart-item-price">@ $${item.product.price.toFixed(
            2
          )}</span>
          <span class="cart-item-total">$${itemTotal.toFixed(2)}</span>
        </div>
      </div>
      <button class="remove-btn" data-product-id="${productId}" title="Remove item">×</button>
    `;

    cartItems.appendChild(cartItem);
  });

  cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  cartTotal.textContent = `$${subtotal.toFixed(2)}`;
}

// Show order confirmation modal
function showOrderModal() {
  renderOrderItems();
  orderModal.style.display = "flex";
  orderModal.classList.add("active");

  // Trigger success animation
  const successIcon = orderModal.querySelector(".success-icon");
  const checkmark = orderModal.querySelector(".success-checkmark");
  setTimeout(() => {
    successIcon.classList.add("animate");
    checkmark.classList.add("centered");
  }, 300);

  showToast("Order confirmed! Thank you for your purchase.", "success");
}

// Close order modal
function closeOrderModal() {
  orderModal.classList.remove("active");
  setTimeout(() => {
    orderModal.style.display = "none";
    // Reset animation
    const successIcon = orderModal.querySelector(".success-icon");
    successIcon.classList.remove("animate");
  }, 300);
}

// Render order items in modal
function renderOrderItems() {
  orderItems.innerHTML = "";
  let total = 0;

  Object.keys(cart).forEach((productId) => {
    const item = cart[productId];
    const itemTotal = item.product.price * item.quantity;
    total += itemTotal;

    const orderItem = document.createElement("div");
    orderItem.className = "order-item";
    orderItem.innerHTML = `
      <img src="${item.product.imgThumb}" alt="${
      item.product.longName
    }" class="cart-item-image">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.product.longName}</div>
        <div class="cart-item-details">
          <span class="cart-item-quantity">${item.quantity}x</span>
          <span class="cart-item-price">@ $${item.product.price.toFixed(
            2
          )}</span>
        </div>
      </div>
      <span class="cart-item-total">$${itemTotal.toFixed(2)}</span>
    `;

    orderItems.appendChild(orderItem);
  });

  modalTotal.textContent = `$${total.toFixed(2)}`;
}

// Start new order
function startNewOrder() {
  cart = {};
  cartQuantity = 0;

  // Reset all product displays
  document.querySelectorAll(".product-card").forEach((card) => {
    const productId = card.dataset.productId;
    updateProductDisplay(productId);
  });

  updateCartDisplay();
  updateHeaderStats();
  closeOrderModal();
  showToast("Ready for a new order!", "info");
}

// Add some visual enhancements
document.addEventListener("DOMContentLoaded", function () {
  // Add floating animation to shapes
  const shapes = document.querySelectorAll(".shape");
  shapes.forEach((shape, index) => {
    shape.style.animationDelay = `${index * 0.5}s`;
  });

  // Add parallax effect to hero section
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
      heroSection.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
  });
});
