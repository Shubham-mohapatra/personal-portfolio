document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);

                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.warn(`Element with ID "${href}" not found.`);
                }
            }
            });
        
        });
    });

    // Back to Top Button
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = "↑";
    backToTopButton.id = "backToTop";
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 15px;
        font-size: 20px;
        opacity: 0;
        visibility: hidden;
        background-color: black;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        z-index: 1000;
        transition: opacity 0.3s ease-in-out;
    `;
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Auto-update Footer Year
    const footerParagraph = document.querySelector('footer p');
    if (footerParagraph) {
        footerParagraph.textContent = `© ${new Date().getFullYear()} Shubham Mohapatra LLC. All rights reserved.`;
    } else {
        console.warn("Footer paragraph not found.");
    }
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
    });

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.1)';
            card.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        const darkModeToggle = document.getElementById("dark-mode-toggle");
        const body = document.body;
    
        const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/></svg>`;
        
        const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fdd835"><path d="M480-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q34 0 57-23t23-57q0-34-23-57t-57-23q-34 0-57 23t-23 57q0 34 23 57t57 23Zm0-280q-17 0-28.5-11.5T440-720v-80q0-17 11.5-28.5T480-840q17 0 28.5 11.5T520-800v80q0 17-11.5 28.5T480-680Zm-180 56q-12 12-28 12t-28-12l-56-56q-12-12-12-28t12-28q12-12 28-12t28 12l56 56q12 12 12 28t-12 28Zm-76 244q-17 0-28.5-11.5T180-480q0-17 11.5-28.5T220-520h80q17 0 28.5 11.5T340-480q0 17-11.5 28.5T300-440h-80Zm76 244-56 56q-12 12-28 12t-28-12q-12-12-12-28t12-28l56-56q12-12 28-12t28 12q12 12 12 28t-12 28Zm180 76q-17 0-28.5-11.5T440-220v-80q0-17 11.5-28.5T480-340q17 0 28.5 11.5T520-300v80q0 17-11.5 28.5T480-180Zm180-76q-12-12-12-28t12-28l56-56q12-12 28-12t28 12q12 12 12 28t-12 28l-56 56q-12 12-28 12t-28-12ZM660-440q-17 0-28.5-11.5T620-480q0-17 11.5-28.5T660-520h80q17 0 28.5 11.5T780-480q0 17-11.5 28.5T740-440h-80Zm76-244-56-56q-12-12-12-28t12-28q12-12 28-12t28 12l56 56q12 12 12 28t-12 28q-12 12-28 12t-28-12Z"/></svg>`;
    
        if (localStorage.getItem("darkMode") === "enabled") {
            body.classList.add("dark-mode");
            darkModeToggle.innerHTML = sunIcon; 
        } else {
            darkModeToggle.innerHTML = moonIcon; 
        }
    
        darkModeToggle.addEventListener("click", function () {
            body.classList.toggle("dark-mode");
    
            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
                darkModeToggle.innerHTML = sunIcon; 
            } else {
                localStorage.removeItem("darkMode");
                darkModeToggle.innerHTML = moonIcon; 
            }
        });
    });
    