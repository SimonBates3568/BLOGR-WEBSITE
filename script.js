// script.js
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(navLink => {
        navLink.addEventListener('click', (event) => {
            event.preventDefault();
            const dropdown = navLink.nextElementSibling;
            const isVisible = dropdown.style.display === 'block';
            // Close all dropdowns
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.style.display = 'none';
            });
            // Toggle current dropdown
            dropdown.style.display = isVisible ? 'none' : 'block';
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.nav-item')) {
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.style.display = 'none';
            });
        }
    });
});
