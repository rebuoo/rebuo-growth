
document.getElementById('quantity').addEventListener('input', function () {
  const qty = parseInt(this.value);
  const pricePerUnit = 1; // Example: 1 INR API price
  const amount = qty * pricePerUnit * 4;
  document.getElementById('amount').innerText = 'Amount: ₹' + amount;
});

document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Order placed! You will be contacted on WhatsApp.');
});
