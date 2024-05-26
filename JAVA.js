document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    try {
        const heroText = document.querySelector('.hero-text');
        const icons = document.querySelector('.icons');
        console.log('Hero Text:', heroText);
        console.log('Icons:', icons);

        const sr = ScrollReveal({
            distance: '65px',
            duration: 2600,
            delay: 450,
            reset: true
        });

        sr.reveal('.hero-text', {delay: 200, origin: 'top'});
        sr.reveal('.icons', {delay: 500, origin: 'left'});
    } catch (error) {
        console.error('ScrollReveal error:', error);
    }
});

function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'flex';
    setTimeout(() => {
        sidebar.style.transform = 'translateX(0)'; 
    }, 10);
}

function closeSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.transform = 'translateX(100%)'; 
    setTimeout(() => {
        sidebar.style.display = 'none';
    }, 300);
}

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) { // Adjust the scroll value as needed
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



// Need help online for JAVA, Java much harder 


