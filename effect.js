// Get elements
const popup = document.querySelector('.popups7');
const closeButtons = document.querySelectorAll('.popups-close, .popups-close-top');

// Open the pop-up (example trigger)
document.addEventListener('DOMContentLoaded', () => {
  popup.style.display = 'block';
});

// Close the pop-up on button click
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    popup.style.display = 'none';
  });
});