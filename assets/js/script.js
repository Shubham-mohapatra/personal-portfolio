// Smooth Scrolling for Navigation Links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (typeof Typewriter !== 'undefined') {
                const typewriter = new Typewriter('#typewriter', {
                    loop: true,
                    delay: 75,
                });
            
                typewriter
                    .typeString('Hey')
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('Welcome to my portfolio!')
                    .start();
            } else {
                console.error('Typewriter library is not loaded. Please include it in your HTML.');
            }
            

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.warn(`Element with ID "${targetId}" not found.`);
            }
        } else {
            console.log(`Non-anchor link detected: ${href}`);
            
        }
    });
});


const backToTopButton = document.createElement('button');
backToTopButton.textContent = "↑";
backToTopButton.id = "backToTop";
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 15px;
    font-size: 20px;
    display: none;
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    z-index: 1000;
`;
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Update Footer Year
const currentYear = new Date().getFullYear();
const footerParagraph = document.querySelector('footer p');
if (footerParagraph) {
    footerParagraph.textContent = `© ${currentYear} Shubham Mohapatra LLC. All rights reserved.`;
} else {
    console.warn("Footer paragraph not found.");
}

// AOS Library Initialization
AOS.init({
    duration: 1000, // Animation duration
    once: true, // Animation occurs only once
    offset: 100, // Offset from the original trigger point
});

// Card Hover Effect
const projectCards = document.querySelectorAll('.card');
projectCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.1)';
        card.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});

// Script Loaded Confirmation
console.log("Script loaded successfully!");
