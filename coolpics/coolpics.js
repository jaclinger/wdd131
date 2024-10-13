document.addEventListener('DOMContentLoaded', function() {
    // Menu Button Toggle
    const menuButton = document.querySelector('.menu-button');
    const navMenu = document.querySelector('.nav-menu');

    menuButton.addEventListener('click', function() {
        // Toggle the 'show' class on the nav menu when the button is clicked
        navMenu.classList.toggle('show');
    });

    // Image Viewer Logic
    const galleryImages = document.querySelectorAll('.gallery img'); // Ensure to select all images directly

    // Function to generate the viewer template
    function viewerTemplate(pic, alt) {
        return `<div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${pic}" alt="${alt}">
        </div>`;
    }

    // Function to open the viewer with the clicked image
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            // Inject the viewer template into the body with the clicked image's src and alt
            document.body.insertAdjacentHTML('beforeend', viewerTemplate(this.src, this.alt));

            // Select the close button and the viewer just added
            const closeViewerBtn = document.querySelector('.close-viewer');
            const viewer = document.querySelector('.viewer');

            // Function to close the viewer
            closeViewerBtn.addEventListener('click', function() {
                viewer.remove(); // Remove the viewer from the DOM
            });

            // Optional: Close the viewer if clicking outside the image
            viewer.addEventListener('click', function(e) {
                if (e.target === viewer) {
                    viewer.remove(); // Remove the viewer when clicking outside the image
                }
            });
        });
    });
});
