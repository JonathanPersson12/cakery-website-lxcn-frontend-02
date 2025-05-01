document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const footer = document.getElementById('footer');

  // Determine the base path dynamically
  const basePath = window.location.pathname.includes('pages') ? '../' : './';

  // Load Navbar
  fetch(`${basePath}components/navbar/navbar.html`)
    .then(response => response.text())
    .then(data => {
      navbar.innerHTML = data;

      // Load the hamburger menu script after the navbar is loaded
      const script = document.createElement('script');
      script.src = `${basePath}components/navbar/hamburgermenu.js`;
      document.body.appendChild(script);
    })
    .catch(error => console.error('Error loading navbar:', error));

  // Load Footer
  fetch(`${basePath}components/footer/footer.html`)
    .then(response => response.text())
    .then(data => {
      footer.innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
});