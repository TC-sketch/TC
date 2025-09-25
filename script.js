document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('bookingForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const pickup = document.getElementById('pickup').value;
  const dropoff = document.getElementById('dropoff').value;
  const datetime = document.getElementById('datetime').value;
  const passengers = document.getElementById('passengers').value;

  const message = `New booking request:%0A
Pickup: ${pickup}%0A
Drop-off: ${dropoff}%0A
Date & Time: ${datetime}%0A
Passengers: ${passengers}`;

  window.open(`https://wa.me/447301905072?text=${message}`, '_blank');
});
