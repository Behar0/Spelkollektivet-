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

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo img');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
            logo.classList.add('scrolled');
            document.querySelector('.site-name').style.fontSize = '18px'; // Smaller text when scrolled
        } else {
            header.classList.remove('scrolled');
            logo.classList.remove('scrolled');
            document.querySelector('.site-name').style.fontSize = '24px'; // Larger text when not scrolled
        }
    });

    let menu = document.querySelector('#menu-icon');
    let navlist = document.querySelector('.navlist');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navlist.classList.toggle('open');
    };
});

// Need help online for JAVA, Java much harder 


