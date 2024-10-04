document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const navMenu = document.querySelector('.nav-menu');

    menuButton.addEventListener('click', function() {
        // Toggle the 'show' class on the nav menu when the button is clicked
        navMenu.classList.toggle('show');
    });
});
