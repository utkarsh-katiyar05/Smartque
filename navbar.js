document.addEventListener("DOMContentLoaded", () => {
  // Wait for the component to be injected
  const checkNavbar = setInterval(() => {
    const navbar = document.querySelector('.navbar');
    const hamburgerBtn = document.querySelector('#hamburgerBtn');
    const closeBtn = document.querySelector('#closeBtn');

    if (navbar && hamburgerBtn && closeBtn) {
      hamburgerBtn.addEventListener('click', function () {
        navbar.classList.add('show-navbar');
      });

      closeBtn.addEventListener('click', function () {
        navbar.classList.remove('show-navbar');
      });

      clearInterval(checkNavbar); // Stop checking
    }
  }, 100);
});
