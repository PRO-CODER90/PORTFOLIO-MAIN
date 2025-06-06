/**
 * Digital Clock Functionality (12-hour format with DD/MM/YYYY date)
 */
function updateClock() {
  const now = new Date();
  
  // Get time in 12-hour format
  let hours = now.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // Convert 0 to 12
  hours = hours.toString().padStart(2, '0');
  
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  
  // Get date in DD/MM/YYYY format
  const day = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
  const year = now.getFullYear();
  
  // Update the clock display
  document.querySelector('.hours').textContent = hours;
  document.querySelector('.minutes').textContent = minutes;
  document.querySelector('.seconds').textContent = seconds;
  document.querySelector('.ampm').textContent = ampm;
  document.querySelector('.date').textContent = `${day}/${month}/${year}`;
}

// Initialize clock and update every second
document.addEventListener('DOMContentLoaded', function() {
  updateClock();
  setInterval(updateClock, 1000);
});