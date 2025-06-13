function sendToWhatsApp() {
  const uid = document.getElementById('uid').value;
  const name = document.getElementById('name').value;
  const diamonds = document.getElementById('diamonds').value;
  const paymentMethod = document.getElementById('paymentMethod').value;
  const sender = document.getElementById('sender').value;

  const message = `*Free Fire Top-Up Request*%0A🎮 UID: ${uid}%0A🧑‍💼 Name: ${name}%0A💎 Diamonds: ${diamonds}%0A💳 Payment Method: ${paymentMethod}%0A📱 Sender Number: ${sender}`;

  window.open(`https://wa.me/03020350825?text=${message}`, '_blank');
