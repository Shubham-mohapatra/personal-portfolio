document.addEventListener("DOMContentLoaded", () => {
    const skillIcons = document.querySelectorAll('.skill-icon');
    
    skillIcons.forEach(icon => {
        const randomDelay = Math.random() * 2;
        const randomDuration = 2 + Math.random() * 2;
        
        icon.style.animation = `float ${randomDuration}s ease-in-out ${randomDelay}s infinite alternate`;
     
        icon.addEventListener('click', () => {
            icon.classList.add('skill-icon-clicked');
            setTimeout(() => {
                icon.classList.remove('skill-icon-clicked');
            }, 500);
        });
    });
    
  
    const adjustAnimationSpeed = () => {
        const skillsTrack = document.querySelector('.skills-track');
        if (window.innerWidth < 768) {
            skillsTrack.style.animationDuration = '20s';
        } else {
            skillsTrack.style.animationDuration = '30s';
        }
    };
    
    adjustAnimationSpeed();
    window.addEventListener('resize', adjustAnimationSpeed);
});