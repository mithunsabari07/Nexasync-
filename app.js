// At the top of app.js, after other imports
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

// Toggle sidebar on hamburger click
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        menuToggle.classList.toggle('active');
    });
}

// Close sidebar when a navigation button is clicked (mobile only)
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('open');
            menuToggle.classList.remove('active');
        }
    });
});
