'use strict';

// Navbar
const navbar = document.querySelector('.navbar');
const hamburgerBtn = document.querySelector('#hamburgerBtn');
const closeBtn = document.querySelector('#closeBtn');

console.log(navbar, hamburgerBtn, closeBtn);

hamburgerBtn.addEventListener('click', function() {
  navbar.classList.add('show-navbar');
});

closeBtn.addEventListener('click', function() {
  navbar.classList.remove('show-navbar');
});
// End Of Navbar