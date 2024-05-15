let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open')
};

const sr = ScrollReveal ({
	distance: '65px',
	duration: 2600,
	delay: 450,
	reset: true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'})


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


