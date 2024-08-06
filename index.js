@font-face {
  font-family: RedHaTitalics;
  src: url(./assets/fonts/RedHatText-Italic-VariableFont_wght.ttf);
}
@font-face {
  font-family: Redhat;
  src: url(./assets/fonts/RedHatText-VariableFont_wght.ttf);
}
@media (max-width: 1024px) {
  .main {
    flex-direction: column;
    width: 100%;
    padding: 0 16px;
    box-sizing: border-box;
  }
  .grid {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    gap: 16px;
    box-sizing: border-box;
  }
  .cart {
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
  }
}

@media (max-width: 768px) {
  .main {
    padding: 0 8px;
    box-sizing: border-box;
  }
  .grid {
    grid-template-columns: 1fr;
    width: 100%;
    gap: 16px;
    box-sizing: border-box;
  }
  .cart {
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
  }
}

@media (max-width: 480px) {
  body {
    margin: 0;
    padding: 6px;
  }
  .main {
    padding: 0 8px;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  .grid {
    grid-template-columns: 1fr;
    width: 100%;
    gap: 8px;
    box-sizing: border-box;
  }
  .cart {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
}
body {
  margin: 0;
  padding: 88px 0;
  background-color: #fcf8f6;
  font-family: Redhat;
}
.main {
  width: 1216px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 32px;
  margin: auto;
}
.addtocart {
  font-family: Redhat;
  width: 150px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid #ad8a85;
  background-color: #fff;
  color: #260f08;
  font-size: 0.875rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -15px;
  margin: auto;
}
.short-name {
  font-family: Redhat;
  color: #87635a;
  font-size: 0.875rem;
  font-weight: 400;
}
.long-name {
  font-family: Redhat;
  color: #260f08;
  font-size: 1rem;
  font-weight: 600;
}
.price {
  font-family: Redhat;
  color: #c73b0f;
  font-size: 1rem;
  font-weight: 600;
}
.product-img-desk {
  width: 100%;
  object-fit: contain;
  border-radius: 8px;
}
.grid {
  width: 800px;
  display: grid;
  grid-template-columns: repeat(3, 250px);
  column-gap: 24px;
  row-gap: 32px;
}
.cart {
  width: 400px;
  background-color: white;
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 12px;
  box-sizing: border-box;
  overflow: hidden;
}
.cart-products {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  box-sizing: border-box;
  overflow: auto;
}
.product-in-cart {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
}
.product-cart-remove {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 1px solid #ad8a85;
  background-color: transparent;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.cart-cake {
  height: 128px;
  width: 100%;
  gap: 16px;
}
h1.cart-heading {
  color: #c73b0f;
  font-family: Redhat;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}
.cart-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.cartpara {
  color: #87635a;
  font-family: Redhat;
  font-size: 0.875rem;
  font-weight: 600;
  margin: 0;
  text-align: center;
}
.img {
  position: relative;
}
.additem {
  width: 160px;
  display: flex;
  height: 44px;
  padding: 0 12px;
  justify-content: space-between;
  align-items: center;
  border-radius: 999px;
  background: #c73b0f;
  margin: auto;
  color: #fff;
  font-family: Redhat;
  font-size: 14px;
  font-weight: 600;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -15px;
}
.additem > button {
  border-radius: 100%;
  width: 20px;
  height: 20px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  background-color: #c73b0f;
  cursor: pointer;
}
.meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.product {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 38px;
  position: relative;
}
.decrement,
.increment {
  display: flex;
  justify-content: center;
  align-items: center;
}
.product-in-cart-name {
  color: #260f08;
  font-family: Redhat;
  font-size: 0.875rem;
  font-weight: 600;
  margin: 0;
}
.product-in-cart-meta {
  display: flex;
  gap: 10px;
}
.product-in-cart-meta > p:nth-of-type(1) {
  color: #c73b0f;
  font-family: Redhat;
  font-size: 0.875rem;
  font-weight: 600;
  margin: 0;
}
.product-in-cart-meta > p:nth-of-type(2),
.product-in-cart-meta > p:nth-of-type(3) {
  color: #87635a;
  font-family: Redhat;
  font-size: 0.875rem;
  margin: 0;
}
.product-in-cart-meta > p:nth-of-type(3) {
  font-weight: 600;
}
.close-but-svg {
  width: 8.75px;
  height: 8.75px;
}
.confirm-order,
.new-order {
  width: 100%;
  height: 53px;
  border-radius: 999px;
  background-color: #c73b0f;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #fff;
  font-family: Redhat;
  font-size: 1rem;
  font-weight: 600;
}
.carbon-box {
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: #fcf8f6;
  border-radius: 8px;
}
.order-total {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #260f08;
  font-family: Redhat;
  font-size: 0.875rem;
  font-weight: 400;
}
.order-total > p {
  color: #260f08;
  font-family: Redhat;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}
.aftercart {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.popup {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.popup-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.popup-content h1,
.textinconfirm {
  font-family: Redhat;
}

.textinconfirm {
  color: #ad8985;
}

.order-confirm-products {
  background-color: #fcf9f7;
  border-radius: 0.5rem;
  margin-bottom: 2.0625rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.order-confirm-list-product {
  position: relative;
  border-bottom: 0.0625rem solid #f4edeb; 
}
.img-name-flex img {
  width: 50px;
  height: 50px;
  margin-right: 1rem;
  border-radius: 10%;
}
.order-confirm-name {
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 0.5rem;
  height: 20px;
}
.order-confirm-quantity {
  font-weight: 600;
  color: #c73a0f;
  height: 10px;
}
.order-confirm-price {
  color: #ad8985;
  height: 10px;
}
.quantity-price-flex {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: -20px;
  margin-bottom: 10px;
  
}
.order-confirm-item-total {
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0.5rem;
  position: absolute;
  right: 2%;
  top: 50%;
  transform: translateY(-60%);
  display: flex;
  justify-content: center;
  align-items: center;
}
.confirm-order-total {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.4rem;
  margin-left: 1.2rem;
  margin-right: 0.7rem;
  
}
.confirm-order-total-price {
  font-size: 1.5rem;
  font-weight: 700;
}
.name-meta-flex{
  display: flex;
  flex-direction: column;
}
.img-name-flex{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 1.2rem;
}