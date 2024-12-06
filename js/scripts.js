// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
// Get the dark mode toggle button
const darkModeToggle = document.getElementById('darkModeToggle');

// Add event listener for the toggle
darkModeToggle.addEventListener('click', () => {
  // Toggle the dark-mode class on the body
  document.body.classList.toggle('dark-mode');

  // Update the button text based on the mode
  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = 'Light Mode';
  } else {
    darkModeToggle.textContent = 'Dark Mode';
  }

  // Save the user's preference in localStorage
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
});

// Apply the saved theme preference on page load
document.addEventListener('DOMContentLoaded', () => {
  const darkModePreference = localStorage.getItem('darkMode');
  if (darkModePreference === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = 'Light Mode';
  }
});
