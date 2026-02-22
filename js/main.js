
        // Use const to grab the elements from the HTML
        const mobileMenu = document.getElementById('mobile-menu');
        const navLinks = document.getElementById('nav-links');
        const navItems = document.querySelectorAll('.nav-links a');
        const currentYear = document.getElementById('current-year');

        // Toggle the mobile menu when the hamburger icon is clicked
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // console.log('Menu toggled!'); // You can use this to debug in the browser console
        });

        // Close the mobile menu automatically when a link is clicked
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Automatically update the footer year
        currentYear.textContent = new Date().getFullYear();
