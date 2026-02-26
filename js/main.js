 // 1. Get the button and the menu container from your HTML
        const mobileBtn = document.getElementById('mobile-menu');
        const navMenu = document.getElementById('nav-links');

        // 2. Tell the button what to do when clicked
        mobileBtn.addEventListener('click', () => {
            // The 'toggle' command adds the class if it's missing, and removes it if it's there
            navMenu.classList.toggle('active');
        });

        // 3. (Bonus) Make the menu close automatically when a customer clicks a link
        const menuLinks = document.querySelectorAll('.nav-links a');
        
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });