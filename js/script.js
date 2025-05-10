document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarNav = document.querySelector('.navbar-nav');
    const navLinks = document.querySelectorAll('.navbar-nav a.nav-link');
    const pageSections = document.querySelectorAll('.page-section');

    // Toggle mobile navigation on toggler click
    navbarToggler.addEventListener('click', () => {
        navbarNav.classList.toggle('active');
    });

    // ADD THIS TOUCHSTART EVENT LISTENER
    navbarToggler.addEventListener('touchstart', (event) => {
        // Prevent accidental double clicks on some mobile browsers
        event.preventDefault();
        navbarNav.classList.toggle('active');
    });

    function hideAllSections() {
        pageSections.forEach(section => {
            section.classList.remove('active');
        });
    }

    function showSection(id) {
        const sectionToShow = document.getElementById(id);
        if (sectionToShow) {
            sectionToShow.classList.add('active');
        }
    }

    // Handle smooth scrolling and mobile menu closing on link click
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Close mobile navigation after a link is clicked
            if (window.innerWidth < 768) {
                navbarNav.classList.remove('active');
            }

            const targetId = this.getAttribute('href').substring(1);
            hideAllSections();
            showSection(targetId);

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Close mobile navigation when clicking outside the menu on mobile
    document.addEventListener('click', (event) => {
        if (window.innerWidth < 768 && navbarNav.classList.contains('active') && !navbarNav.contains(event.target) && event.target !== navbarToggler) {
            navbarNav.classList.remove('active');
        }
    });
});