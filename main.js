
// define some variables
const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.header-nav-links');
let toggle = true;

// add a simple click event handler
hamburger.addEventListener('click', () => {
    if (toggle) {
        menu.style.display = 'flex';
        hamburger.style.color = 'white';


        const navLinks = document.querySelectorAll('.nav-link a');

        navLinks.forEach((individualLink) => {
            individualLink.addEventListener('click', () => {
                if (hamburger) {
                menu.style.display = 'none';
                hamburger.style.color = 'black';
            }
            })
        })

        toggle = !toggle;
    } else {
        menu.style.display = 'none';
        hamburger.style.color = 'black';
        toggle = !toggle;
    }
})

