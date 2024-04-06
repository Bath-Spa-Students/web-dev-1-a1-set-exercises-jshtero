document.getElementById('calculateBtn').addEventListener('click', calculateTotal);

function calculateTotal() {
  const petrolCost = parseFloat(document.getElementById('petrolCost').value);
  const litersPurchased = parseFloat(document.getElementById('litersPurchased').value);
  const totalCost = petrolCost * litersPurchased;
  document.getElementById('totalCost').textContent = `Total Cost: $${totalCost.toFixed(2)}`;
}
