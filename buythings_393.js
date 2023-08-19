const cart = [];
let totalAmount = 0;
function addToCart(productTitle, productPrice) {
  cart.push({ title: productTitle, price: productPrice });
  totalAmount += productPrice;
  updateTotalPrice();
  alert(`เพิ่ม "${productTitle}" เข้าสู่ตะกร้าสินค้า`);
}
function updateTotalPrice() {
  const totalPriceElement = document.getElementById('totalPrice');
  totalPriceElement.textContent = totalAmount.toFixed(2) + " บาท";
}
const addToCartButtons = document.querySelectorAll('.product button');

addToCartButtons.forEach(button => {
  button.addEventListener('click', function() {
    const productTitle = this.parentNode.querySelector('h2').textContent;
    const productPrice = parseFloat(this.parentNode.querySelector('p2').textContent);
    addToCart(productTitle, productPrice);
  });
});
function updateTotalPrice() {
    const totalPriceElement = document.getElementById('totalPrice');
    let finalTotalAmount = totalAmount; 
    if (finalTotalAmount >= 1000) {
      const discount = finalTotalAmount * 0.1; 
      finalTotalAmount -= discount; 
    }
  
    totalPriceElement.textContent = finalTotalAmount.toFixed(2) + " บาท";
  }