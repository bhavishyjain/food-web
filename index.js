let cartQuantity = 0;
function cartclick(button) {
  const productElement = button.closest('.product');
  const additemElement = productElement.querySelector('.additem');
  const imgElement = productElement.querySelector('.product-img-desk');
  imgElement.style.border = '2px solid #C73B0F';
  additemElement.style.display = 'flex';
  button.style.display = 'none';
  cartQuantity++;
  document.getElementById('cart-quantity').textContent = cartQuantity;
}
function increment(button){
    const quantityElement = button.closest('.additem').querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
}
function decrement(button) {
    const productElement = button.closest('.product');
    const additemElement = productElement.querySelector('.additem');
    const addToCartButton = productElement.querySelector('.addtocart');
    const quantityElement = additemElement.querySelector('.quantity');
    const imgElement = productElement.querySelector('.product-img-desk');
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
      quantity--;
      quantityElement.textContent = quantity;
    } else {
      additemElement.style.display = 'none';
      addToCartButton.style.display = 'flex';
      quantityElement.textContent = 1;
      imgElement.style.border = 'none';
      cartQuantity--;
      document.getElementById('cart-quantity').textContent = cartQuantity;
    }
  }